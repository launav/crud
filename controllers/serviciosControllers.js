const Servicio = require('../models/ServicioModel');
//esto va a requerir el modelo de servicio que nos hemos creado
//LEER TODOS LOS SERVICIOS
const leerServicios = (req, res) => {

    Servicio.find((error, servicios) => {
        if (error) {
            res.json({
                ok: false,
                msg: 'Error al leer los servicios'
            });
        } else {
            console.log(servicios)
            res.render('back/servicios', {
                servicios
            });
        };
    });


};

//VISTA FORMULARIO CREAR NUEVO
const vistaCrearServicio = (req, res) => {
    res.render('back/nuevoServicio');
};

//CREAR NUEVO
const nuevoServicio = (req, res) => {

    const { nombre, comentario } = req.body;

    const servicio = new Servicio(({
        nombre,
        comentario
    }));

    servicio.save((error, servicio) => {
        if (error) {
            res.json({
                ok: false,
                msg: 'Error al crear el servicio'
            });
        };

        res.redirect('/servicios');

    });

};

//VISTA FORMULARIO EDITAR
const vistaEditarServicio = (req, res) => {

    const { id } = req.params;
    //const id = req.params.id;
    // console.log(id);

    Servicio.findOne({ _id: id }, (error, servicio) => {
        if (error) {
            res.json({
                ok: false,
                msg: 'Error al leer el servicio'
            });
        } else {
            res.render('back/editarServicio', { servicio });
        }
    });


};

//EDITAR SERVICIO
const editarServicio = (req, res) => {
    const { id, nombre, comentario } = req.body;

    Servicio.findByIdAndUpdate(id, { nombre, comentario }, (error, servicio) => {
        if (error) {
            return res.json({
                ok: false,
                msg: 'Error al editar el servicio'
            });
        };

        res.redirect('/servicios');
    });
};

//ELIMINAR SERVICIO
const eliminarServicio = (req, res) => {

    const { id } = req.params;

    Servicio.findByIdAndRemove({ _id: id }, (error, servicio) => {
        if (error) {
            res.json({
                ok: false,
                msg: 'Error al eliminar servicio'
            });
        };
        res.redirect('/servicios');

    })



};

//LEER UN SERVICIO
const leerUnServicio = (req, res) => {

    const { id } = req.params;

    Servicio.findOne({ _id: id }, (error, servicio) => {
        if (error) {
            return res.json({
                ok: false,
                msg: 'Error al leer el servicio'
            });
        } else {
            res.render('back/servicio', {
                servicio
            });
        };

    });



};

//EXPORTARLO
module.exports = {
    leerServicios,
    nuevoServicio,
    leerUnServicio,
    editarServicio,
    eliminarServicio,
    vistaCrearServicio,
    vistaEditarServicio
}