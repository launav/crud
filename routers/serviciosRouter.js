const express = require('express');
const router = express.Router();
const { leerServicios, nuevoServicio, leerUnServicio, editarServicio, eliminarServicio, vistaCrearServicio, vistaEditarServicio } = require('../controllers/serviciosControllers')


//LEER TODOS LOS SERVICIOS
router.get('/', leerServicios);

//VISTA FORMULARIO CREAR NUEVO
router.get('/nuevo', vistaCrearServicio);

//CREAR NUEVO
router.post('/nuevo', nuevoServicio);

//VISTA FORMULARIO EDITAR
router.get('/editar/:id',vistaEditarServicio);

//EDITAR SERVICIO
router.post('/editar',editarServicio);

//ELIMINAR SERVICIO
router.get('/eliminar/:id',eliminarServicio);

//LEER UN SERVICIO
router.get('/:id',leerUnServicio);


module.exports = router;

