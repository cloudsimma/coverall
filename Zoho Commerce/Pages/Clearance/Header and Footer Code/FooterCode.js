/***********************************************
Description: Footer Code Updates
Created AT : 22/08/2022
Created By : Punitha
************************************************/

<style>
#customSidebar {
    margin-left: 1.75%;
    margin-top: 1.2%;
    background-color: white;
}
</style>

// <!--html of the content need to be displayed in the sidebar-->

<div id="customSidebar" data-theme-sidebar-mobile-content-container class="theme-sidebar-area">
<div class="zpcontent-container sidebar-container "><div data-element-id="" data-element-type="sidebarsection" class="zpsidebar-section zpdefault-section zpdefault-section-bg ">
<div id="customSidebarCont" class="zpsidebar-container" style="background-color:rgb(52, 73, 94);color:white;font-size: 17px;">PRODUCTS</div>
<div     style='margin-left: 10px;margin-right: 10px;margin-bottom: 5px; margin-top: 5px;'><a style='color: rgb(52, 73, 94);    font-weight: bold;
' href="https://getcoverall.zohocommerce.com/categories/vests-hoodies-rain-gear/3014970000001158001">Vests, Hoodies &amp; Rain Gear</a><br><a style='color: rgb(52, 73, 94);    font-weight: bold;' href="https://getcoverall.zohocommerce.com/categories/armour/3014970000001158005"> Armour</a><br><a style='color: rgb(52, 73, 94);    font-weight: bold;' href="https://getcoverall.zohocommerce.com/categories/coveralls/3014970000001158003">Coveralls</a><br>
<a style='color: rgb(52, 73, 94);    font-weight: bold;' 
href="https://getcoverall.zohocommerce.com/categories/parkas-jackets/3014970000001158007">Parkas &amp; Jackets </a><br>
<a style='color: rgb(52, 73, 94);    font-weight: bold;' 
href="https://getcoverall.zohocommerce.com/categories/shirts-pants/3014970000001158011">Shirts &amp; Pants </a><br>
<a style='color: rgb(52, 73, 94);    font-weight: bold;' href="https://getcoverall.zohocommerce.com/categories/masks/3014970000001158013">Masks </a><br>
<a style='color: rgb(52, 73, 94);    font-weight: bold;' href="https://getcoverall.zohocommerce.com/categories/gloves/3014970000001158015">Gloves </a><br>
<a style='color: rgb(52, 73, 94);    font-weight: bold;' href="https://getcoverall.zohocommerce.com/categories/accessories-others/3014970000001158017">Accessories/Others</a><br>
<a style='color: rgb(52, 73, 94);    font-weight: bold;' href="https://getcoverall.zohocommerce.com/categories/bibs/3014970000001158009">Bibs</a><br>
<a style='color: rgb(52, 73, 94);    font-weight: bold;' href="https://getcoverall.zohocommerce.com/categories/bags/3014970000001158019">Bags</a></div>
<div id="customSidebarCont" class="zpsidebar-container" style="background-color:rgb(52, 73, 94);color:white;font-size: 17px;">CART</div>
<div style="margin-left: 10px;margin-right: 10px;margin-bottom: 5px; margin-top: 5px;" >
<div id="carddtls" ></div><br>
<div class="danger" style= 'margin-bottom: 10px;'>
  <p><small><strong>Note : </strong>Items may not seem as they appear or seem as illustrated</small></p>
</div>
</div>
<div id="customSidebarCont" class="zpsidebar-container" style="background-color:rgb(52, 73, 94);color:white;font-size: 17px;">WHOLESALE</div>
<div style="Height:175px;   margin-left: 10px;margin-right: 10px;margin-bottom: 5px; margin-top: 5px;">
<div style= "margin-bottom: 10px;"><img style ="width: 90%;height: 120px;" src="https://getcoverall.zohocommerce.com/CoverAll_Image/volume_ordering.jpg"></div>
<a  style='text-decoration: revert;    color: rgb(52, 73, 94);' href="https://getcoverall.zohocommerce.com/wholesale"><div style="text-align: center;">For <b>volume discount </b> visit </div> </a>
</div>
<div id="customSidebarCont" class="zpsidebar-container" style="background-color:rgb(52, 73, 94);color:white;font-size: 17px;">SUBSCRIBE TO OUR NEWSLETTER</div>
<div style="Height:175px;   margin-left: 10px;margin-right: 10px;margin-bottom: 5px; margin-top: 5px;">
<div style= "margin-bottom: 10px;"><img style ="width: 40%;height: 2%;margin-left: 20%;" src="https://getcoverall.zohocommerce.com/CoverAll_Image/newsletter.png"></div>
<a  style='text-decoration: revert;color: rgb(52, 73, 94);' href="https://getcoverall.zohocommerce.com/newsletter"><div style="    text-align: left;
    margin-left: 10%;"> Get started today → </div> </a>
</div>

</div>
</div></div></div>
</div>
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
            var themeCont = document.body.querySelector("[data-theme-content-container]");
            themeCont.classList.add("theme-sidebar-enable");
            themeCont.appendChild(document.getElementById("customSidebar"));
    });
</script>

<script type="application/javascript">
 /* Custom code to show cart data can be written here */
    function fetchCartDataOnLoad() {
        $X.get({
            url: "/storefront/api/v1/cart",
            handler: function () {
                var res = JSON.parse(this.responseText);
                if (!res || res.status_code != 0) {
                    return;
                }
                var cart_obj = res.payload;
                console.log(cart_obj);
if(cart_obj.line_items.length > 0 )
{
var htmldata ="";
for (var i=0; i < cart_obj.line_items.length; i++)
{
htmldata  += "<div><ul><li >";
htmldata  += "<a href='https://getcoverall.zohocommerce.com"+cart_obj.line_items[i].product_url +"' style='position: relative; overflow: hidden;'>";
htmldata  +="<img width='50' height='40' src='https://getcoverall.zohocommerce.com"+cart_obj.line_items[i].image.url+"/900x900' sizes='(max-width: 450px) 100vw, 450px'>"+cart_obj.line_items[i].name+"  - "+ cart_obj.line_items[i].attribute_name1+"</a>";
htmldata  +="<span>"+cart_obj.line_items[i].quantity +" × <span><bdi>";
htmldata  +="<span>"+cart_obj.symbol_formatted+"</span>&nbsp;"+cart_obj.line_items[i].item_total+"</bdi></span>";
htmldata  +="</span></li></ul>";
htmldata  +="</div>";
}
htmldata  +="<br> <p style='margin-left :20px;'> <strong>Subtotal:</strong> <span ><bdi><span>"+cart_obj.symbol_formatted+"</span>&nbsp;"+cart_obj.sub_total+"</bdi></span></p>";
htmldata  += " <br> <p style='margin-left :20px;'><a style=' color: rgb(52, 73, 94);      font-weight: bold;' href='https://getcoverall.zohocommerce.com/cart' >View cart</a> <a style='padding-left: 25px;    color: rgb(52, 73, 94); font-weight: bold;'href='https://getcoverall.zohocommerce.com/checkout' >Checkout</a></p> ";
	
var e = document.getElementById("carddtls");
e.innerHTML = htmldata;
}
            }
        });
    }
    window.addEventListener("load", fetchCartDataOnLoad);
</script>