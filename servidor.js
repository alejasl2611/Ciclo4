//console.log("Bienvenido a su inmobiliaria")

const express = require('express');
const mongoose = require('mongoose');
const InmuebleSchema = require("./modelos/Inmueble.js") //Importar Schema

const app = express();  //inicializa el servidor web
const router = express.Router(); //La ruta
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexión a base de datos
mongoose.connect("mongodb+srv://Inmobiliaria_Ciclo4:inmobiliaria2021@clusterinmobiliaria.yle24.mongodb.net/DatabaseInmobiliaria?retryWrites=true&w=majority");

//Operaciones CRUD - Creación, lectura y eiminación de datos
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})

router.get('/inmueble', (req, res) => { //Lectura de datos
    InmuebleSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo las tareas");
        }else{
            res.send(datos);
        }
    })
    
});

router.post('/inmueble', (req, res) => {    //Almacena los datos
    let nuevoInmueble = new InmuebleSchema({
        id: req.body.id,
        idAsesor: req.body.Asesor,
        tipoServicio: req.body.TipoServicio,
        imagen: req.body.imagen,
        descripcionGeneral: req.body.descripcion,
        ubicacion: req.body.ubicacion,
        caracteristicas: req.body.caracteristicas,
        precio: req.body.precio
    });

    nuevoInmueble.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("El inmueble ha sido almacenado correctamente")
    })
});

app.use(router);
app.listen(3500, () => {
    console.log("Servidor corriendo en el puerto 3500 de la inmobiliaria")
});