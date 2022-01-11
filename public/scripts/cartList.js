 const fetch = require("node-fetch")

    const productName = qs("#productName")
    const productImg = qs("#image")
    const string = localStorage.getItem("cartList")
    const data = Array.from(string);
    const carrito = data.filter(n => { return Number(n)})
    console.log(carrito);
  
    const newData = document.createElement("div");
    const newImage = document.createElement("img");
    newData.innerHTML = "<div>" + "Hello" + "</div>"
    newData.style.color = "red"
    newData.style.width = "1000px";
    newData.style.fontSize = "2rem";
    newImage.style.width = "30vw";
    fetch("http://localhost:3000/api/productos")
            .then(response =>  response.json())
            .then(prod =>  {
                const result = prod.map(res=>{return res})
           for(let i = 0; i < result.length; i++) {
               
            if(result[i].id = carrito[i]) {
                productName.innerText = result[i].name
              newprod =  result[i].name + " ";
              newData.appendChild(newprod)
              productImg.setAttribute('src', `${result[i].image}`); 

            } 
           }
        });

 document.body.appendChild(newData)



