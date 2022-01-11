const form = document.querySelector("#register");
const spanName = document.querySelector("#name")

form.addEventListener("submit", function(e){
    e.preventDefault()
    let errors = {}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7092e192aa2758735846257770578c19417ee3b8
    if(form.name.value.length <=0){
        errors.name = "el campo no debe estar vacio"
        document.querySelector("#name").innerText = errors.name
    } else if(form.name.value.length < 8){
        errors.name = "el campo debe tener como minimo 8 ch"
        document.querySelector("#name").innerText = errors.name
<<<<<<< HEAD
=======
=======
    if(form.name.value.length <= 0){
        errors.name = "el campo no debe estar vacio";
       spanName.innerText = errors.name
    } else if(form.name.value.length < 8){
        errors.name = "el campo debe tener como minimo 8 ch"
        spanName.innerText = errors.name
>>>>>>> bf3ac5fcae46177324b924424db23ddcb3cf3246
>>>>>>> 7092e192aa2758735846257770578c19417ee3b8
    } else {
        delete errors.name
    }

    console.log()

    if(Object.keys(errors).length == 0){
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