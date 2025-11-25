
//Crear objeto persona

let persona ={
    nombre: "Diego",
    edad: 20,
    ciudad: "Sevilla",
    init : function(nombre, edad, ciudad){
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    },
    longitudNombre: function(){
        console.log(this.nombre.length);
    }
};

console.log(persona);

//Acceder a las propiedades del objeto
persona.ciudad = "Granada";
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);
persona.longitudNombre();


//Segunda manera de crear objetos
let segundaPersona = Object.create(persona);
segundaPersona.nombre = "Ana";
segundaPersona.edad = 25;
segundaPersona.ciudad = "Madrid";

let terceraPersona = Object.create(persona);
terceraPersona.init("Luis", 30, "Barcelona");


class Gato{
    nombre;
    color;
    edad;

    constructor(nombre, color, edad){
        this.nombre = nombre;
        this.color = color;
        this.edad = edad;
    }

    maullar(){
        console.log("Miau miau");
    }
}

let misifu = new Gato("Misifu", "Blanco", 3);
misifu.maullar();


import {Perro, Rana} from './Perro.js';

//let firulais = new Perro("Firulais", "Labrador", 5);