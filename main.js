const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart')

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const aside2 = document.querySelector('#product-detail2');
const productsContainer = document.querySelector('.cards-container');
const closeDetailsIncon = document.querySelector('.product-detail-close');
const orderContent = document.querySelector('.my-order-content');



email.addEventListener('click', toogleDesktopMenu);
menu.addEventListener('click', toogleMobileMenu);
carritoIcon.addEventListener('click', toogleDesktopAside)
closeDetailsIncon.addEventListener('click', closeDetails)

function toogleDesktopMenu() {
    const asideClose = aside.classList.contains('inactive');
    if (!asideClose) {
        aside.classList.toggle('inactive');
    }



    desktopMenu.classList.toggle('inactive');
}
function toogleMobileMenu() {
    const asideClose = aside.classList.contains('inactive');
    if (!asideClose) {
        aside.classList.toggle('inactive');
    }
    closeDetails();
    mobileMenu.classList.toggle('inactive');
}
function toogleDesktopAside() {
    const mobileClose = mobileMenu.classList.contains('inactive');

    if (!mobileClose) {
        mobileMenu.classList.toggle('inactive');
    }
    const isAside2Close = aside2.classList.contains('inactive');
    if (!isAside2Close) {
        aside2.classList.add('inactive')
    }

    aside.classList.toggle('inactive');
}

function openDetails() {
    const isAside1Close = aside.classList.contains('inactive');
    if (!isAside1Close) {
        aside.classList.add('inactive');
    }
    aside2.classList.remove('inactive');
}

function closeDetails() {
    aside2.classList.add('inactive');
}


/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
</div>  */

productList = [];
productList.push({
    name: 'Bike',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img1 = document.createElement('img');
        img1.setAttribute('src', product.image);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        img1.addEventListener('click', openDetails); /* funcion que abre detalles */

        const divDiv = document.createElement('div');
        const price = document.createElement('p');
        price.innerText = '$' + product.price;
        const name = document.createElement('p');
        name.innerText = product.name;


        divDiv.append(price, name);

        const figure = document.createElement('figure');
        const img2 = document.createElement('img');

        img2.setAttribute('src', './icons/bt_add_to_cart.svg');

        figure.append(img2);

        productInfo.append(divDiv, figure);
        productCard.append(img1, productInfo);

        productsContainer.append(productCard);
        img2.addEventListener('click', agregarProducto);
    }
}

renderProducts(productList);

function agregarProducto() {

}


/* <div class="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="bike">
                </figure>
                <p>Bike</p>
                <p>$30,00</p>
                <img src="./icons/icon_close.png" alt="close">
   </div> */

   function createTarjet(arr){
    for (product of arr) {
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart')
    const figure = document.createElement('figure');
    const img2 = document.createElement('img');
    img2.setAttribute('src',product.image);
    figure.append(img2); 
    const p1 = document.createElement('p');
    p1.innerText = product.name;
    const p2 = document.createElement('p');
    p2.innerText = '$' + product.price;
    const img = document.createElement('img');
    img.setAttribute('src','./icons/icon_close.png');
    shoppingCart.append(figure,p1,p2,img);

    orderContent.append(shoppingCart);
    }
   }
   

   createTarjet(productList);