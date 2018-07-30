const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('El archivo ha sido guardado');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }

}
const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return listadoPorHacer;

}

const listar = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (mod) => {
    cargarDB();
    let encontrado = false;
    for (let tarea of listadoPorHacer) {
        if (mod === tarea.descripcion) {
            tarea.completado = !tarea.completado;
            mostrar(tarea);
            encontrado = true;
        }

    }
    // let index = listadoPorHacer.findIndex(tarea=> tarea.descripcion=== mod);

    // if(index>=0){
    //     listadoPorHacer[index].completado=!listadoPorHacer[index].completado
    // }
    // else{
    //     console.log("No se encontró la tarea");
    // }

    if (encontrado == true) {
        guardarDB();
    } else {
        console.log("No se encontró la tarea");
    }



}

const mostrar = (tarea) => {
    console.log(colors.blue("=======Tareas======"));
    console.log("Descripción: ", tarea.descripcion);

    if (tarea.completado == true) {
        console.log("Completado: ", colors.green(tarea.completado));
    } else {
        console.log("Completado: ", colors.red(tarea.completado));
    }
}

const borrar = (tareaBorrar) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === tareaBorrar);

    if (index >= 0) {
        listadoPorHacer.splice(index, index);
        console.log("Tarea borrada!");
        guardarDB();
        return true;
    } else {
        console.log("No se encontró la tarea");
        return false;
    }

    // let nuevoListado = listadoPorHacer.filter(tarea=> listadoPorHacer.descripcion !== tareaBorrar);

    // if(nuevoListado.length==listadoPorHacer.length){
    //     return false;
    // }
    // else{
    //     listadoPorHacer=nuevoListado;
    //     return true;
    // }

    guardarDB();

}
module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}