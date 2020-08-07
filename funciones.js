const fs = require('fs');

module.exports = {
    archivo: './tareas.json',
    leerJSON: function() {
        return JSON.parse(fs.readFileSync(this.archivo,'utf-8'))
    },
    escribirJSON: function(array) {
        fs.writeFileSync(this.archivo, array);
    },
    crearTarea: function(nuevaTarea) {
        let tareas = this.leerJSON();
        tareas.push(nuevaTarea);
        let tareasJson = JSON.stringify(tareas);
        this.escribirJSON(tareasJson);
    },
    filtrarPorEstado: function(estado) {
        let tareas = this.leerJSON();
        return tareas.filter(tarea => tarea.estado === estado);
    }
}