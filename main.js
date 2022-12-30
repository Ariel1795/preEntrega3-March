

const formulario = document.querySelector("#formulario");

class Cañas {
    constructor(marca, nombre, medida, tramos, precio, stock){
        this.marca = marca;
        this.nombre = nombre;
        this.medida = medida;
        this.tramos = tramos;
        this.precio = precio;
        this.stock = stock;
    }
}
let divCañas = document.querySelector("#cañas");
const listaCañas = JSON.parse(localStorage.getItem("cañas")) || [
{id:1, marca:"ALBATROS", nombre:"DORADILLO", medida:"180", tramos: 1, precio: 7500, stock: 4},
{id:2, marca:"ALBATROS", nombre: "HULK", medida:"210", tramos: 2, precio: 5000, stock: 3},
{id:3, marca:"ALBATROS",nombre: "HULK", medida: "180", tramos:2, precio: 10000, stock: 0},
{id:4, marca:"WATERDOG", nombre:"COLVILLE", medida:"240", tramos: 2, precio: 7000, stock: 0},
{id:5, marca:"WATERDOG", nombre:"COLVILLE", medida:"360", tramos: 2 , precio: 12500, stock: 3},
{id:6, marca:"WATERDOG", nombre:"COLVILLE", medida:"390", tramos: 2, precio: 13000, stock: 1},
];

const nuevaCaña = () => {
    let marca = document.getElementById("marca").value;
    let nombre = document.getElementById("nombre").value;
    let medida = document.getElementById("medida").value;
    let tramos = document.getElementById("tramos").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;

    let cañaNueva = new Cañas(marca, nombre, medida, tramos, precio, stock);

    listaCañas.push (cañaNueva);
    localStorage.setItem("cañas", JSON.stringify(listaCañas));

    return listaCañas;
}

formulario.onsubmit = (e) => {
    e.preventDefault();
    nuevaCaña();
    mostrarCañas()
}
const mostrarCañas = ()=> {
    const cañasGuardadas =  JSON.parse(localStorage.getItem("cañas"));

    cañasGuardadas.forEach(caña => {
        divCañas.innerHTML += `
                                <div>
                                    <h3> Marca: ${caña.marca}</h3>
                                    <h3> Nombre : ${caña.nombre}</h3>
                                    <p> Medida: ${caña.medida}</p>
                                    <p> Tramos: ${caña.tramos}</p>
                                    <p> Precio: $${caña.precio}</p>
                                    <p> Stock: ${caña.stock}</p>
                                </div>
                                `
    })

}
