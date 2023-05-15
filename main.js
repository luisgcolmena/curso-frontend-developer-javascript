const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCart = document.querySelector(".navbar-shopping-cart")
const shoppingCartDetail = document.querySelector(".shopping-cart-detail")
const cardsContainer = document.querySelector(".cards-container")

navbarEmail.addEventListener('click', toggleDesktopMenu)
menuIcon.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleshoppingCartDetail)

function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive")

    if (!shoppingCartDetail.classList.contains("inactive")) {
        shoppingCartDetail.classList.toggle("inactive")
    }
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle("inactive")

    //Si el menu del shopping cart esta activo, se desactiva con el onClick() al mobile menu.
    if (!shoppingCartDetail.classList.contains("inactive")) {
        shoppingCartDetail.classList.toggle("inactive")
    }    
}

function toggleshoppingCartDetail () {
    shoppingCartDetail.classList.toggle("inactive")

    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.toggle("inactive")
    }

    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.toggle("inactive")
    }
}

const productList = []

productList.push({
    name: "Bike",
    price: "120,00$",
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "PC",
    price: "520,00$",
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Console",
    price: "420,00$",
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts (arr) {

    for (product of arr) {
        /* Creando el tag div "product-card" y asignandole su respectiva clase*/
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        /* Creando el tag img */
        const productImg = document.createElement("img")
        productImg.setAttribute('src', product.img)

        /* Creando el tag div "product-info" y asignandole su respectiva clase*/
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")

        /* Creando el tag div que contiene la info del producto*/
        const productText = document.createElement("div")

        const productPrice = document.createElement("p")
        productPrice.innerHTML = "$" + product.price

        const productName = document.createElement("p")
        productName.innerHTML = product.name

        /* Creando el tag figure */
        const productFig = document.createElement("figure")
        const figureImg = document.createElement("img")
        figureImg.setAttribute('src', "./icons/bt_add_to_cart.svg")

        /* Estableciendo la jerarquia de los tags */
        productFig.appendChild(figureImg)
        productText.append(productPrice, productName)
        productInfo.append(productFig,productText)
        productCard.append(productImg, productInfo)
        cardsContainer.append(productCard)
    }
}

renderProducts(productList)