window.addEventListener('load', function(){
    let name = document.querySelector("#name")
     let email = document.querySelector("#email")
      let password = document.querySelector("#password")
       let repassword = document.querySelector("#repassword")
    let form = document.querySelector("#form")
       let button = document.querySelector("#button")
          let nameError = document.querySelector("#nameError")
             let emailError = document.querySelector("#emailError")
             let passwordError = document.querySelector("#passwordError")
             let repasswordError = document.querySelector("#repasswordError")

form.addEventListener("click", function(event) {
   event.preventDefault()
   let errores = [];
  if ( Object.keys(name).value.length < 1) {
    errores.push("Este campo debe estar completo")
   }
   if ( Object.keys(email).value.length < 1) {
    errores.push("Este campo debe estar completo")
   }
   if ( Object.keys(password).value.length < 1) {
    errores.push("Este campo debe estar completo")
   }
   if ( Object.keys(repassword).value.length < 1) {
    errores.push("Este campo debe estar completo")
   }

   if(error.length >= 1) {
       event.submit()
   }
})
             
})