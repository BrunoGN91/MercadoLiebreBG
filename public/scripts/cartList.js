
    const productName = qs("#productName")
    const productImg = qs("#productImg")
    const cartProduct = qs("#cartProduct")
    const string = localStorage.getItem("cartList")
    const data = string.match(/\d+/g)


    const numbers = data.map(Number) // Recibe todos los parametros de la variable string, solo deja los numeros pero queda todo el resto como NaN
    const carrito = numbers.filter(n =>
      !Number.isNaN(n));
    console.log(carrito) 
 
    fetch("http://localhost:3000/api/productos")
            .then(response =>  response.json())
            .then(prod =>  {
                console.log(prod)
                
           for(let i = 0; i < prod.length; i++) {
               for( let j = 0; j < carrito.length; j++) {

              if(prod[i].id === carrito[j]) {
              
                const producto = document.createElement("div")
                const nombre = document.createElement("p")
                const imagen = document.createElement("img")
               
              nombre.innerText =  prod[i].name;
              
              imagen.setAttribute('src', `${prod[i].image}`); 
              console.log(imagen);
              cartProduct.innerHTML += "<div>" + imagen.outerHTML + nombre.outerHTML  +  "</div>" 
              console.log(cartProduct)

            } 
           }
          }
        });





