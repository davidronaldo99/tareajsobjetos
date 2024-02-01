console.log("Hola objeto.js");

const animal = {
    Nombre: "Tigre",
    Tipo: "Felino",
    Hábitat: "Selva",
    Edad: 7, 
    Color: "Naranja con rayas negras"
};


console.log("Objeto Animal:", animal);


console.log("Edad del Animal:", animal.Edad);
console.log("Color del Animal:", animal.Color);


animal.Edad = 6;
animal.Color = "NuevoColor";


console.log("Objeto Animal Actualizado:", animal);
