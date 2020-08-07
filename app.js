const funciones = require('./funciones');

switch(process.argv[2]) {
    case 'listar':
        let tareas = funciones.leerJSON();
        tareas.forEach((tarea, i) => console.log('Tarea N°' + (i+1) + ' ' + tarea.titulo));
        break;

    case 'crear':
        let nuevaTarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
        }
        funciones.crearTarea(nuevaTarea);
        break;

    case 'filtrar':
        let tareasFiltradas = funciones.filtrarPorEstado(process.argv[3]);
        tareasFiltradas.forEach((tarea, i) => console.log('Tarea N°' + (i+1) + ' ' + tarea.titulo));
        break;

    case 'help':
        console.log('Ingrese un comando en consola: "node app.js COMANDO".');
        console.log();
        console.log('Comandos Disponibles:');
        console.log('- listar: muestra el listado completo de tareas.');
        console.log('- crear: crea una nueva tarea. Añada un argumento adicional indicando el título de la tarea a crear.');
        console.log('- filtrar: permite filtrar tareas por su estado, indicando el estado en un argumento adicional.');
        break;
        
    default:
        console.log('Para utilizar esta aplicación debe ejecutar algún comando desde consola.');
        console.log('Ingrese el comando "help" para más información.');
        break;
}