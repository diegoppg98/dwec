//Crear Mapa
const animales = new Map();

//Añadir elementos
animales.set('Gato', 'miau');
animales.set('Perro', 'guau');
animales.set('Vaca', 'muuuu');
animales.set('Pavo', 'apagaluz');
animales.set('Gochu', 'oink');
animales.set('Serpiente', 'ssssss');

//Modificar un valor
animales.set('Perro', 'woof');

//Elminar valor
animales.delete('Gochu');

//Devolver valor asociado a clave
animales.get('Gato');

//Tamaño de la lista
animales.size;

//Recorrer valores mapa
for(anim of animales.values()){
    console.log(anim);
}