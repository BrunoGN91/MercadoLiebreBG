const form = document.querySelector("#register")

form.addEventListener("submit", function(e){
    e.preventDefault()
    let errors = {}

    if(form.namespaceURI.valueOf.length <=0){
        errors.name = "el campo no debe estar vacio"
    } else if(form.name.value.length < 8){
        errors.name = "el campo debe tener como minimo 8 ch"
    } else {
        delete errors.name
    }

    console.log()

    if(Object.keys(errors).length < 0){
        form.submit()
    }

})

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}