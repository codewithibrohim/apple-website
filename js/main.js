let elMenuBtn = document.querySelector(".site-header__hidden-menu-btn");
let elMenuBtnImg = document.querySelector(".site-header__hidden-btn-img");  
let elMobileNavList = document.querySelector(".site-header__hidden-nav");
let elMobileNavListShow = document.querySelector(".site-header__hidden-show");
// let elMobileNavListRemoveBtn = document.querySelector(".site-header__menu-remove-btn");
// let elMobileNavListRemove = document.querySelector(".site-header__hide")

elMenuBtnImg.addEventListener("click", function(){
    elMobileNavList.classList.toggle("site-header__hidden-show");
})
// elMobileNavListRemoveBtn.addEventListener("click" , function(){
//     elMobileNavList.classList.toggle("site-header__hide")
// })

