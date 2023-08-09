const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart') 

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside= document.querySelector('.product-detail');



email.addEventListener('click',toogleDesktopMenu);
menu.addEventListener('click',toogleMobileMenu);
carritoIcon.addEventListener('click',toogleDesktopAside)

function toogleDesktopMenu(){
    const asideClose = aside.classList.contains('inactive');
    if(!asideClose){
        aside.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toogleMobileMenu(){
    const asideClose = aside.classList.contains('inactive');
    if(!asideClose){
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toogleDesktopAside(){
    const mobileClose = mobileMenu.classList.contains('inactive');
    
    if(!mobileClose){
        mobileMenu.classList.toggle('inactive');       
    }

    aside.classList.toggle('inactive');
}