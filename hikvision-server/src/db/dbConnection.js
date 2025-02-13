const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/hikvision');
        console.log('Base de datos Hikvision Conectada')
    } catch (error) {
       console.log(error);
       throw new Error('Error al conectar la base de datos');
    };
};


module.exports = dbConnection;