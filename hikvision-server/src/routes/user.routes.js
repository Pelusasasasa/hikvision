const { Router } = require('express');
const encriptar = require('../middlewares/encryptPassword');
const { createUser, loginUser, deleteUser, updateUser } = require('../controllers/user.controllers');
const validarJWT = require('../middlewares/validar-jtw');
const router = Router();


router.route('/')
    .post(encriptar, createUser)
router.route('/login')
    .post(loginUser)
router.route('/:id')
    .put(validarJWT, updateUser)
    .delete(validarJWT, deleteUser)

module.exports = router;