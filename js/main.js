function saludar () {
    alert("Bienvenido a Cinéfilo! Simulador de streaming.")
}
saludar();

let nombreUsuario = prompt("Para ingresar, escriba su nombre de usuario.");

while ((nombreUsuario == null) || (nombreUsuario == "") || (nombreUsuario == " ")) {
    alert("El nombre de usuario no es valido.");
    nombreUsuario = prompt("Por favor, escriba un nombre de usuario.");
}

alert("Bienvenido " + nombreUsuario + "!");

let pelicula;
let pelicula1 = "1- Star Wars Capítulo 4.";
let pelicula2 = "2- Harry Potter y el Prisionero de Askaban.";
let pelicula3 = "3- El Señor de los Anillos: Las Dos Torres.";

function elegir_pelicula () {
    pelicula = prompt("Elija que pelicula desea ver: \n 1. Star Wars Capítulo 4. \n 2. Harry Potter y el Prisionero de Askaban. \n 3. El Señor de los Anillos: Las Dos Torres");
    if (pelicula === "1"){
        alert("Usted eligió 'Star Wars Capítulo 4'. La duracion de la pelicula es de 121 minutos. \n Que la disfrutes!");
    } else if (pelicula === "2"){
        alert("Usted eligió 'Harry Potter y el Prisionero de Askaban'. La duracion de la pelicula es de 137 minutos. \n ¡Que la disfrutes!");
    } else if (pelicula === "3"){
        alert("Usted eligió 'El Señor de los Anillos: Las Dos Torres'. La duracion de la pelicula es de 179 minutos. \n Que la disfrutes!");
    } else {
        alert ("Por favor escriba 1, 2 o 3 para elegir la película deseada. ");
        //no puedo buclear la funcion para que me ofrezca nuevamente el catálogo.
    }
}    
elegir_pelicula();

