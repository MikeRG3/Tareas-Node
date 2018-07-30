const argv = require("./config/yargs").argv;
const colors = require('colors/safe');
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.listar();
        if (!argv.c) {
            console.log(colors.blue("=======Tareas======"));
            for (let tarea of listado) {

                console.log("Descripción: ", tarea.descripcion);

                if (tarea.completado == true) {
                    console.log("Completado: ", colors.green(tarea.completado));
                } else {
                    console.log("Completado: ", colors.red(tarea.completado));
                }

            }
            console.log("==================");
        } else {
            console.log(colors.blue("=======Tareas======"));
            for (let tarea of listado) {

                if (tarea.completado.toString() === argv.c) {
                    console.log("Descripción: ", tarea.descripcion);
                    if (tarea.completado == true) {
                        console.log("Completado: ", colors.green(tarea.completado));
                    } else {
                        console.log("Completado: ", colors.red(tarea.completado));
                    }
                }

            }
            console.log("==================");
        }

        break;
    case 'actualizar':
        porHacer.actualizar(argv.descripcion);

        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}