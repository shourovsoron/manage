const primaryNav=document.querySelector(".primary-navigation");
const MobilToggleBtn=document.querySelector(".mobile-men-btn");
const MobilToggleBtnImg=document.querySelector(".mobile-men-btn img");

MobilToggleBtn.addEventListener('click', ()=>{
    primaryNav.toggleAttribute("data-visible");

    if(primaryNav.hasAttribute("data-visible")){
        MobilToggleBtnImg.src="./images/icon-close.svg"
    }else{
      
        MobilToggleBtnImg.src="./images/icon-hamburger.svg"
    }
})

console.log(MobilToggleBtnImg)




// for other======

