const descripcion = {
    alias: "d",
    demand: true,
    desc: 'Descripción de la tarea por hacer'
}
const completado = {

    alias: 'c',
    desc: 'Marca como completado una tarea por hacer'

}
const argv = require('yargs')
    .command('crear', 'Crea tarea por hacer', { descripcion })
    .command('listar', "Lista las tareas por hacer", { completado })
    .command('actualizar', 'Cambia las tareas a completadas', { descripcion, completado })
    .command('borrar', 'Borra una tarea por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}