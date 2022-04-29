const express = require('express');
const cors = require('cors');
require('dotenv').config();

//servidor express
const app = express();

//Directorio publico
app.use( express.static('public') );

//CORS
app.use( cors() );

//parse body
app.use( express.json() );

//rutas
app.use( '/api/banco', require('./routes/routes'));

app.listen( process.env.PORT, () => {
    console.log(`Server en puerto ${ process.env.PORT }`);
} );