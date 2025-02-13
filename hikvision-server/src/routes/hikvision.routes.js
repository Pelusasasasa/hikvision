const {Router} = require('express');
const validarJWT = require('../middlewares/validar-jtw');

const router = Router();

router.use(validarJWT);

//Ruta Para Obtener Grabaciones
router.route('/recordings', getRecordings);

//Ruta para descargar una grabacion especifica
router.get('/recordings/:id', downloadRecording);


module.exports = router;