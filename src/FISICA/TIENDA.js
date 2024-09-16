/*
*MAGIAAA
*/

const header = document.querySelector("#encabezado");
const contenedor = document.querySelector("#contenedor")
const bodey = document.querySelector("#body")


window.addEventListener("scroll", function(){
    if (contenedor.getBoundingClientRect().top < 10){
        header.classList.add("scroll")
    } else {
        header.classList.remove("scroll")
    }
})

// Get the cart container and list elements
const cartContainer = document.getElementById('cart-container');
const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('boton-pagar');

// Create an empty cart object
let cart = {};

// Function to add an item to the cart
function addItemToCart(game) {
    if (!cart[game]) {
        cart[game] = 1;
    } else {
        cart[game]++;
    }
    updateCart();
}

// Function to update the cart display
function updateCart() {
    cartList.innerHTML = '';
    let total = 0;
    for (const game in cart) {
        const gameElement = document.createElement('li');
        gameElement.textContent = `${game} x ${cart[game]}`;
        cartList.appendChild(gameElement);
        total += cart[game] * 120; 
    }
    cartTotal.textContent = `Total: $${total.toFixed(3)}`;
}

// Add event listeners to the "Agregar al carrito" buttons
const gameButtons = document.querySelectorAll('.Informacion button');
gameButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const game = e.target.parentNode.previousElementSibling.alt;
        addItemToCart(game);
    });
});

// Add event listener to the checkout button
checkoutBtn.addEventListener('click', () => {
    alert('¡Compra realizada! El total de tu compra es de: $' + cartTotal.textContent.split('$')[1]);
    // Implement actual checkout logic here
});