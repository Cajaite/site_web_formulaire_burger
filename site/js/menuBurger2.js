const menuHamburger = document.querySelector(".bouton")
const navlinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navlinks.classList.toggle('mobile-menu')        
})   