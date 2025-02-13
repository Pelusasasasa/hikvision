const bcrypt = require('bcryptjs');

//Middleware para cifrar la contraseña antes de guardar el ususario
const encriptar = async(req, res, next) => {

    try {
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            req.body.password = hashedPassword;
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

};

module.exports = encriptar;