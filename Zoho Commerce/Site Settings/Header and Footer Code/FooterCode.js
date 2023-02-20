/***********************************************
Description: Footer Code Updates
Created AT : 22/08/2022
Created By : Punitha
************************************************/

<script>

    var CUSTOM_FIELD_LABEL = "_productIds";
    var RECOMMEND_PRODUCT_CUSTOM_FIELD_ATTRIBUTE = "data-recommended_product_ids";

    function hideProductIdsCustomField() {
        var customFieldContainers = $D.getAll("[data-custom-field-main-container]");
        customFieldContainers.forEach( function (customFieldContainer) {

            var variantIds = $D.getAll('[data-variant-id]', customFieldContainer);
            for(var i =0; i < variantIds.length; i++) {
                var fieldLabels = $D.get('[data-zs-customfield-label]', variantIds[i]);

                if(fieldLabels.innerText.trim() == CUSTOM_FIELD_LABEL) {
                    var fieldValue = $D.get('[data-zs-customfield-display-value]', variantIds[i]);
                    if(fieldValue && fieldValue.innerText) {
                    }
                    $D.css(variantIds[i], 'display', 'none')
                }
            }
            
        })
        
    }

    function getProductIdCustomField() {

        var customFieldContainer = $D.get("[data-custom-field-main-container]");
        var variantIds = $D.getAll('[data-variant-id]', customFieldContainer);
        for(var i =0; i < variantIds.length; i++) {
            var fieldLabels = $D.get('[data-zs-customfield-label]', variantIds[i]);

            if(fieldLabels.innerText.trim() == CUSTOM_FIELD_LABEL) {

                var fieldValue = $D.get('[data-zs-customfield-display-value]', variantIds[i]);
                if(fieldValue && fieldValue.innerText) {
                    return fieldValue.innerText.trim();
                }
            }
        }
        return "";

    }

    function selectedVariant() {
        setTimeout(hideProductIdsCustomField, 500);
    }


    window.addEventListener("DOMContentLoaded", hideProductIdsCustomField, false);
    document.addEventListener("zp-event-selected-variant", selectedVariant, false);
    document.addEventListener("zp-event-add-to-cart-success", selectedVariant, false);
    document.addEventListener("quickview:opened", selectedVariant, false);


    var recommended_container = document.querySelector('[data-zs-recommended-products]');

    
    var callback = function(mutationsList, observer) {
        for(var mutation of mutationsList) {
            if(mutation.type === 'childList') {
                console.log('A child node has been added or removed.');
                getCurrencyCode();
                observer.disconnect();
            }
        }
    }

    function hideDisplayContainer(isDisplay) {
        var remSection = $D.findParent(recommended_container, 'theme-section');
        if(remSection) {
            $D.css(remSection, 'display', isDisplay)
        }
    }

    if(recommended_container) {
        var config = { attributes: true, childList: true, subtree: true };
        var observer = new MutationObserver(callback);
        observer.observe(recommended_container, config);
    }

    function getCurrencyCode() {
        var productIds = getProductIdCustomField();
        var products = productIds ? productIds.split(",") : [];


        if(products.length == 0 && recommended_container) {
            var remSection = $D.findParent(recommended_container, 'theme-section');
            if(remSection) {
                $D.remove(remSection);
            }
        }
        
        if(products.length > 0) {
            hideDisplayContainer('none');
            $X.get({
			url: "/store-user/api/v1/organizations/meta", // No I18N
			handler: function () {
                    var res = JSON.parse(this.responseText);
                    if (res.status_code == 0) {
                        var currencyCode = res.data.currency.currency_code;
                        replaceRecommendedProducts(products, currencyCode);

                    }
                }
            })

        }

    }



    function replaceRecommendedProducts(products, currencyCode) {
        
        if(products.length > 0) {

            $X.get({
                url: "/zos-api/products?product_ids=" + products,
                handler: function() {
                    var res = JSON.parse(this.responseText);
                    if (res.code == 0) {
                        hideDisplayContainer('');

                        res.products.forEach( function(product, index) {
                            console.log("product id: " + product.product_id);
                            var pName = product.name;
                            var href = "/products/" + product.url + "/" + product.product_id;
                            var rate = product.variants[0].rate;
                            var rate_format = product.variants[0].rate_formatted;
                            var label_price = product.variants[0].label_rate;
                            var label_price_format = product.variants[0].label_rate_formatted;



                            var start_with_formatted = rate_format;
                            var endth_with_formatted = rate_format;
                            var start_with = rate;
                            var endth_with = rate;
                            var is_variant_price = false;
                            product.variants.forEach( function(variant) {
                                if(variant.rate < start_with) {
                                    start_with = variant.rate;
                                    start_with_formatted = variant.rate_formatted;
                                    is_variant_price = true;
                                }

                                if(variant.rate > endth_with) {
                                    endth_with = variant.rate;
                                    endth_with_formatted = variant.rate_formatted;
                                    is_variant_price = true;
                                }
                            });

                            
                            var first_recommended_product = $D.getAll('[data-zs-product-id]', recommended_container)[0];
                            if(!first_recommended_product) {
                                return;
                            }

                            var rcomProduct = first_recommended_product.cloneNode(true);

                            rcomProduct.setAttribute('data-zs-product-id', product.product_id);
                            
                            var prodImg = rcomProduct.querySelector('[data-src]');



                            var imgSrc;
                            if(product.document_id && product.document_id != "") {
                                var imgDimensions = "300x300";

                                var datasrc = prodImg.getAttribute('data-src');
                                if(datasrc) {
                                    var imagesrc = datasrc.split("/");
                                    imgDimensions = imagesrc[imagesrc.length-1];
                                }
                                imgSrc = "/product-images/" + product.document_name + "/" + product.document_id + "/" + imgDimensions;
                            } else {
                                imgSrc = "/zs-common/images/no-preview-image.jpg";
                            }

                            prodImg.setAttribute('src', imgSrc);
                            prodImg.setAttribute('data-src', imgSrc);
                            $D.css(prodImg, 'display', '');

                            var hrefs = rcomProduct.querySelectorAll('[href]');
                            
                            hrefs.forEach(function(url) {
                                url.setAttribute('href', href);
                                if($D.hasClass(url, 'theme-product-hover-discription')) {
                                    url.innerText = pName;
                                }
                            });
                            



                            var sellingprices = $D.get('[data-zs-selling-price]', rcomProduct);
                            if(sellingprices) {
                                if(is_variant_price) {
                                    var variantPrice = '<span data-zs-selling-price="' + start_with + '"> ' + currencyCode + start_with_formatted + ' </span>' 
                                    +' - <span data-zs-selling-price="'+  endth_with +'"> '+ currencyCode + endth_with_formatted +' </span>';
                                    sellingprices.parentNode.innerHTML = variantPrice;
                                
                                } else {
                                    sellingprices.setAttribute('data-zs-selling-price', start_with);
                                    sellingprices.innerText = currencyCode + start_with_formatted
                                }
                            }                            


                            var labelPrices = $D.getAll('[data-zs-label-price]', rcomProduct);
                            labelPrices.forEach( function (labelPrice) {
                                labelPrice.setAttribute('data-zs-label-price', label_price);
                                labelPrice.innerText = currencyCode + label_rate_formatted
                                
                            })
                            
                            
                            //replace product name
                            var productName = $D.get('.theme-product-name', rcomProduct);
                            if(!productName) {
                                productName = $D.get('.theme-prod-name', rcomProduct);
                            } 

                            if(productName) {
                                var productNameSpan = $D.getByTag("a", productName)[0];
                                if(productNameSpan) {
                                    productNameSpan.innerText = pName;
                                }
                            }

                            var quick_view = $D.get('[data-zs-product-url]', rcomProduct);
                            if(quick_view) {
                                quick_view.setAttribute('data-zs-product-url', href + '?quick_look=true')
                            }
                            
                            var existing_product = $D.get('[data-zs-product-id="'+ product.product_id +'"]', recommended_container);
                            if(existing_product) {
                                $D.remove(existing_product);
                            }

                            var rowElement = $D.getByClass('zprow', recommended_container)[0]
                            if(rowElement) {
                                $D.prepend(rowElement, rcomProduct);
                            } 

                            if(index == res.products.length - 1) {
                                var allProducts = $D.getAll('[data-zs-product-id]', recommended_container);
                                allProducts.forEach( function(prod, ind) {
                                    if(ind > res.products.length - 1) {
                                        $D.remove(prod);
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }
    }

    </script>