let addToCart = document.querySelectorAll(".add-to-cart");
let cartNumber = document.querySelector("#cart_number");
let item = document.getElementById("productName");

let cart = [];
let numberCart = 0;
let cartProducts = []

localStorage.removeItem("cart")

if(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"))
}

addToCart.forEach(button => {
    button.addEventListener("click", function (e) {
        cart.push(e.target.value);
        localStorage.setItem("cart", JSON.stringify(cart));
        numberCart += 1;
        cartNumber.innerText = numberCart;
        
      
    })
})






