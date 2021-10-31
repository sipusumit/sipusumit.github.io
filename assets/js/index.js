const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("navMenu");
const navContainer = document.getElementsByClassName("nav-container")[0];
let menuOpen = false;
let firstTime = true;
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        navMenu.classList.add("navMenuOpen");
        navContainer.style.height = "300px"
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        navMenu.classList.remove("navMenuOpen");
        navContainer.style.height = "80px"
    }
})