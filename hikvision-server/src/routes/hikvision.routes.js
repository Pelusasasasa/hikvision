const {Router} = require('express');
const router = Router();

// const {} = require

//Ruta Para Obtener Grabaciones
router.route('/recordings', getRecordings);


//Ruta para descargar una grabacion especifica
router.get('/recordings/:id', downloadRecording);


module.exports = router;