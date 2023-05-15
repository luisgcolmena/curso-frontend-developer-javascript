const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCart = document.querySelector(".navbar-shopping-cart")
const productDetail = document.querySelector(".product-detail")

navbarEmail.addEventListener('click', toggleDesktopMenu)
menuIcon.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleProductDetail)

function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive")

    if (!productDetail.classList.contains("inactive")) {
        productDetail.classList.toggle("inactive")
    }   
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle("inactive")

    //Si el menu del shopping cart esta activo, se desactiva con el onClick() al mobile menu.
    if (!productDetail.classList.contains("inactive")) {
        productDetail.classList.toggle("inactive")
    }    
}

function toggleProductDetail () {
    productDetail.classList.toggle("inactive")

    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.toggle("inactive")
    }

    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.toggle("inactive")
    }
}