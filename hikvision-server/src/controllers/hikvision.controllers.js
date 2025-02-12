const axios = require('axios');

//Obtener Grabaciones
const getRecordings = async(req, res ) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener las grabaciones' });
    };
}