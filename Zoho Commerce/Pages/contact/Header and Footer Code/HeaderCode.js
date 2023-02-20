/***********************************************
Description: Header Code Update in HOme Page
Created AT : 22/08/2022
Created By : Punitha
************************************************/
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<script type="application/javascript">
    function addMenusInTopBar(){
        var target_elme = document.querySelectorAll("[data-theme-portal='zptheme-portal']")[0];
        var menu_elm = document.createElement("div");
        menu_elm.innerHTML='<a style="margin: 0 20px;"><a href="http://getcoverall.zohocommerce.com/wholesale">WHOLESALE</a><a style="margin: 0 20px;"></a><a href="#" onclick="Linkpdf()">PDF CATALOGUE</a><a style="margin: 0 20px;"><a href="https://getcoverall.zohocommerce.com/cart">View Cart</a><a style="margin: 0 20px;"><a href="https://getcoverall.zohocommerce.com/checkout">Checkout</a><a style="margin: 0 140px;"> <a href="https://www.facebook.com/armourready/"><i class="fa fa-facebook"></i></a><a style="margin: 0 5px;"> <a href="https://twitter.com/armourready"><i class="fa fa-twitter"></i> </a><a style="margin: 0 5px;"> <a href="https://www.youtube.com/channel/UCryxen8wjH0MV8EogyTDn6A"><i class="fa fa-youtube-play"></i> </a><a style="margin: 0 5px;"> <a href="https://www.instagram.com/armourready/"><i class="fa fa-instagram"></i> </a>';
        target_elme.parentNode.insertBefore(menu_elm, target_elme);
    }
    window.addEventListener("load", addMenusInTopBar);

function Linkpdf(){
window.open("https://forms.zoho.com/coverall1/form/ContactUs1", "_blank");
}
</script>