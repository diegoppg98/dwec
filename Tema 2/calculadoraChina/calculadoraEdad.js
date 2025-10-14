
const YEAR = 2025;

const HOROSCOPE = [ "Mono", "Gallo", "Perro", "Cerdo", "Rata", 
    "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra" ]; 

function calculateAge(){
    let yearOfBirth = document.getElementById("yearOfBirth").value;

    let age = YEAR - yearOfBirth;

    document.getElementById("result").innerHTML = "Tu edad es: " + age + " años.";


    let index = yearOfBirth % 12;
    let animal = HOROSCOPE[index];
    document.getElementById("result").innerHTML += "<br>Tu animal del zodiaco chino es: " + animal;

}