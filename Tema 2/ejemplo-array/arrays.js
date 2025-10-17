/*
//Declarar un array
let frutas = ['Manzana', 'Banana', 'Cereza'];
const paises = ['Argentina', 'Brasil', 'Chile'];

//Acceder a un elemento del array
console.log(frutas[0]); // Manzana
console.log(paises[1]); // Brasil

//Modificar un elemento del array
frutas[0] = 'Pomelo';
paises[2] = 'Perú';

console.log(frutas); // ['Pomelo', 'Banana', 'Cereza']
console.log(paises); // ['Argentina', 'Brasil', 'Perú']

//frutas = 7; // No hay error, frutas ahora es un número
//paises = 7; // Error: Assignment to constant variable.


const presidentes2 = new Array('Bukele', 'Trump', 'Putin', 'Pedro Sánchez');

const numeros = [10]; // Array con un solo elemento
const numeros2 = new Array(10); // Array vacío con longitud 10

console.log(numeros); // [10]
console.log(numeros2); // [ <10 empty items> ]

//Obtener la longitud de un array
presidentes.length; // 4

*/
const presidentes = ['Bukele', 'Trump', 'Putin', 'Pedro Sánchez'];

//Recorrer un array

//Bucle for
for(let i=0; i< presidentes.length; i++){
    //console.log(presidentes[i]);
}

//Bucle for in
for(let p in presidentes){
    console.log(p); //Muestra el índice
    //console.log(presidentes[p]); //Muestra el valor
}

//Bucle for of
for(let p of presidentes){
    console.log(p); //Muestra el valor
}

//forEach con lambda
presidentes.forEach( p => {
    console.log(p); //Muestra el valor
});

//Ordenar una lista
presidentes.sort(); //Ordena alfabéticamente

//Añadir un elemento al final
presidentes.push('López Obrador');
presidentes.push('Lula');

//Eliminar el último elemento
presidentes.pop();

//Añadir un elemento en posición específica
presidentes.splice(2, 0, 'Biden'); //En la posición 2, eliminar 0 elementos y añadir 'Biden'

//Eliminar un elemento en posición específica
presidentes.splice(1, 1); //En la posición 1, eliminar 1 elemento y añadir 'Macri'

//Añadir varios elementos en posición específica
presidentes.splice(3, 0, 'Macri', 'Piñera'); //En la posición 3, eliminar 0 elementos y añadir 'Macri' y 'Piñera'

//Mostrar todos los presidentes en etiquetas
document.getElementById('lista').innerText = presidentes;
