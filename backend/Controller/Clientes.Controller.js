import { modeloCiente } from "../Models/Clientes.Models.js"


modeloCiente.create({
    Name:"Jessica",
    Apepat:"Esparza",
    Edad:21,
    Correo:"utm21040187@utma.edu.mx"
})

export const testCliente=()=>{console.log("Funciona el controlador")}