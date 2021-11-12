const mongoose = require('mongoose'); //Importación de mongoose Envía y lee desde la base de datos

let InmuebleSchema = new mongoose.Schema({  //Construcción del Schema
    id: Number,
    idAsesor: Number,
    tipoServicio: String,
    imagen: String,
    descripcionGeneral: String,
    ubicacion: String,
    caracteristicas: String,
    precio: String
});

module.exports = mongoose.model('inmueble', InmuebleSchema, 'Inmuebles');