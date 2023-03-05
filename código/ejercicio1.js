
//Aquí haces tu código normal
let a=5;
let b=6;
let c= a+b;


//Preferiblemente no mover esto

let boton=document.getElementById("boton");
let respuesta=document.getElementById("respuesta");

boton.addEventListener('click', (event) => {
    respuesta.innerText=c;
})

