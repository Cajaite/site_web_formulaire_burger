const menuHamburger = document.querySelector(".navbar .bouton");
const navlinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')        
})