var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

    function () {
        offerBar.style.display = "none"
    }
)



 var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})


document.getElementById("search").addEventListener("keyup", function () {
    var enteredValue = this.value.toUpperCase(); 
    var productContainer = document.getElementById("productcontainer");
    var productList = productcontainer.querySelectorAll("div");

    for (var count = 0; count < productList.length; count++) {
        var productText = productList[count].textContent || productList[count].innerText; 
        if (productText.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none"; 
        } else {
            productList[count].style.display = ""; 
        }
    }
});