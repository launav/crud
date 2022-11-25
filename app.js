const express = require('express');
require('dotenv').config();
const {DBConection } = require('./database/config');

/*CONFIGURAR EXPRESS */
const app = express();
const port = process.env.PORT;

/*CONECTAR A BBDD */
DBConection();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

/*CONFIGURAR STATIC */
app.use(express.static(__dirname + '/public'));


/*CONFIGURAR TEMPLATE ENGINES */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


/*RUTAS */
app.use('/', require('./routers/indexRouter.js'));
app.use('/servicios', require('./routers/serviciosRouter.js'));

//es importante que esto esté abajo del todo para que se ejecute lo último
app.use((req, res) => {
    res.status(404).render('back/404', {
        error: 404,
        msg: 'Página no encontrada'
    });
});

/*PONER EL SERVIDOR A LA ESCUCHA */
app.listen(port, () => {
    console.log(`Express a la escucha del puerto ${port}`);
});
