/***********************************************
Description: Footer Code Updates
Created AT : 22/08/2022
Created By : Punitha
************************************************/

<style>
.theme-header   {
background-color: #E7E600;
}
</style>

<script>
    // Prodcut details page multi tab
    document.addEventListener("DOMContentLoaded", function(event) {
        var isProductDetailsPage = (window.location.pathname.split('/')[1] == "products") ? true : false;

        if (isProductDetailsPage) {
            productUrl = window.location.pathname.split('/')[2],
                productId = window.location.pathname.split('/')[3],
                targetContainer = document.querySelector(`[data-zs-product-id='3014970000001031533'] .theme-prod-detail-tab-tabcontent-container`);

            function reqListener(responseText) {
                var data = JSON.parse(responseText),
                    tabHeader = "",
                    tabHeaderParent = "",
                    tabContentContainer = "",
                    tabContent = "",
                    tabContentContainerParent = "";
                data.tabs.forEach(function(tab) {
                    tabHeader = document.createElement('div');
                    tabContentContainer = document.createElement('div');
                    tabContent = document.createElement('div');

                    setAttributes(tabHeader, {
                        "class": "theme-prod-detail-tab",
                        "data-detail-tab": tab.tab_id,
                        "onclick": "detailtab(this)"
                    });
                    setAttributes(tabContentContainer, {
                        "class": "theme-prod-detail-tab-content",
                        "data-detail-tab-content": tab.tab_id + "-content"
                    });
                    setAttributes(tabContent, {
                        "class": "theme-product-info-content"
                    });

                    tabHeader.innerHTML = tab.tab_name;
                    tabContent.innerHTML = tab.tab_content;
                    tabContentContainer.append(tabContent);

                    tabHeaderParent = document.querySelector("[data-zs-detail-tabs-container]");
                    tabContentContainerParent = document.querySelector("[data-zs-detail-tabs-content-container]");
                    if (tabHeaderParent) tabHeaderParent.append(tabHeader);
                    if (tabContentContainerParent) tabContentContainerParent.append(tabContentContainer);

                    function setAttributes(el, attrs) {
                        for (var key in attrs) {
                            el.setAttribute(key, attrs[key]);
                        }
                    }
                });
            }
            const xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.open("GET", `/json/armour-ready-armour-–-combo.json`);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == "200") {
                    reqListener(xhr.responseText);
                }
            };
            xhr.send(null);
        }
    }); 

    </script>