

let addToCart = document.querySelectorAll("#add-to-cart");
let cartNumber = document.querySelector("#cart_number");
let item = document.getElementById("productName");

let cart = [];

let numberCart = 0;

localStorage.removeItem("cart")

if(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"))
}

addToCart.forEach(i => {
    i.addEventListener("click", function (e) {
        console.log(e.target)
        cart.push(e.target.parentElement.value);
        localStorage.setItem("cart", JSON.stringify(cart));
        numberCart += 1;
        cartNumber.innerText = numberCart;
      
      
      console.log(cart)
        localStorage.setItem("cartList", JSON.stringify(cart))
    })
})

localStorage.setItem("cartList", cart.obj)
window.addEventListener("click" , function (e) {
    
console.log(cart)
})


