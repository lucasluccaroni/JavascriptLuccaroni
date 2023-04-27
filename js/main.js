let monitor = String;
let monitorS = "Monitor Samsung - $10000.";
let monitorLG = "Monitor LG - $12000";

let teclado =  String;
let tecladoR = "Teclado Razer - $7000";
let tecladoG = "Teclado LG - $7500";

let mouse = String;
let mouseR = "Mouse Razer - $4000";
let mouseG = "Mouse Logitech - $4500";

let auricular = String;
let auricularR = "Auricular Razer - $4000"
let auricularG = "Aurucular Logitech - $4500"

let precioMonS = 10000;
let precioMonLG = 12000;

let precioTR = 7000;
let precioTG = 7500;

let precioMouR = 4000;
let precioMouG = 4500;

let precioAR = 4000;
let precioAG = 4500;


const bienvenida = () => {
    alert("Bienvenid@ a LOCAL SUPPORT\n TIENDA DE ARTICULOS GAMING ONLINE");
}

const productos = () => {
    let seleccion = parseInt(prompt("A continuación, ofrecemos los siguientes productos:\n PULSE EL NUMERO CORRESPONDIENTE\n 1. Monitores\n 2. Teclados\n 3. Mouses\n 4. Auriculares\n PARA FINALIZAR PULSE '0'."));
    while(seleccion != 0){
        switch(seleccion){
            case 1:
                monitores();
                break;
            case 2:
                teclados()
                break;
            case 3:
                mouses()
                break;
            case 4:
                auriculares()
                break;
            default:
                alert("ERROR. Elija un numero válido");
                break;
        }
        seleccion = parseInt(prompt("A continuación, ofrecemos los siguientes productos:\n PULSE EL NUMERO CORRESPONDIENTE\n 1. Monitores\n 2. Teclados\n 3. Mouses\n 4. Auriculares\n PARA FINALIZAR PULSE '0'."));
    }   
}

const monitores = () => {
    let eleccion = parseInt(prompt(`Elija un monitor:\n 1. ${monitorS}\n 2. ${monitorLG}`));
    if(eleccion == 1){
        alert(`${monitorS} - AÑADIDO AL CARRITO`);
        return precioMonS;
    }else if(eleccion == 2){
        alert(`${monitorLG} - AÑADIDO AL CARRITO`);
        return precioMonLG;
    }
}



const teclados = () => {
    let eleccion = parseInt(prompt(`Elija un teclado:\n 1. ${tecladoR}\n 2. ${tecladoG}`));
    if(eleccion == 1){
        alert(`${tecladoR} - AÑADIDO AL CARRITO`);
    }else if(eleccion == 2){
        alert(`${tecladoG} - AÑADIDO AL CARRITO`);
    }
}

const mouses = () => {
    let eleccion = parseInt(prompt(`Elija un mouse:\n 1. ${mouseR}\n 2. ${mouseG}`));
    if(eleccion == 1){
        alert(`${mouseR} - AÑADIDO AL CARRITO`);
    }else if(eleccion == 2){
        alert(`${mouseG} - AÑADIDO AL CARRITO`);
    }
}

const auriculares = () => {
    let eleccion = parseInt(prompt(`Elija par de auriculares:\n 1. ${auricularR}\n 2. ${auricularG}`));
    if(eleccion == 1){
        alert(`${auricularR} - AÑADIDO AL CARRITO`);
    }else if(eleccion == 2){
        alert(`${auricularG} - AÑADIDO AL CARRITO`);
    }
}



bienvenida();
productos();


// UTILIZAR UN BOTON PARA FINALIZAR COMPRA, ADEMAS DEL 0 PARA ESC.