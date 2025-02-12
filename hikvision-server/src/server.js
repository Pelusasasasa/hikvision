const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importar Rutas
const hikvisionRoutes = require('./routes/hikvision');

//configurar express
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(bodyParser.json());

//Rutas
app.use('/api/hikvision', hikvisionRoutes);


//Iniciar Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriente en htt://localhost:${PORT}`)
});