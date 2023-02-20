/***********************************************
Description: signin Hide
Created AT : 22/08/2022
Created By : Punitha
************************************************/
<script type="text/javascript">
function hidesidebarinportal(){
    if(window.zs_view === "signin" || window.zs_view === "signup" || (window.zs_view === "sinin"){
         document.getElementById("customSidebar").style.display="none";
    }
}
document.addEventListener('DOMContentLoaded',hidesidebarinportal);
</script>