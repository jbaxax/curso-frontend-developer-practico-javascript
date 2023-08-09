const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart')

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const productsContainer = document.querySelector('.cards-container');



email.addEventListener('click', toogleDesktopMenu);
menu.addEventListener('click', toogleMobileMenu);
carritoIcon.addEventListener('click', toogleDesktopAside)

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
    mobileMenu.classList.toggle('inactive');
}
function toogleDesktopAside() {
    const mobileClose = mobileMenu.classList.contains('inactive');

    if (!mobileClose) {
        mobileMenu.classList.toggle('inactive');
    }

    aside.classList.toggle('inactive');
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
productList.push = ({
    name: 'Bike',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
    productList.push = ({
        name: 'Bike',
        price: 400,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    productList.push = ({
        name: 'Bike',
        price: 400,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

    function renderProducts(arr) {
        for (product of arr) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            const img1 = document.createElement('img');
            img1.setAttribute('src',product.image);
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
            const divDiv = document.createElement('div');
            const name = document.createElement('p');
            const price = document.createElement('p');
            divDiv.append(name,price);
            const figure = document.createElement('figure');
            const img2 = document.createElement('img');            
            img2.setAttribute('src','./icons/bt_add_to_cart.svg');
            figure.append(img2);
            productInfo.append(divDiv,figure);
            productCard.append(productInfo,img1);
            
            productsContainer.append(productCard);

        }
    }

renderProducts(productList);