const validarJWT = (req, res, next) => {
    const jwt = require('jsonwebtoken');

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la validacion'
        });
    };

    try {
        //Veirifcamos el jwt y ponemos en la peticion el uid y el password
        const {uid, password} = jwt.verify(
            token,
            process.env.JTW
        );

        req.uid = uid;
        req.password = password

    } catch (error) {
        console.log(error)
        return res.status(401).json({
            ok: false,
            msg: 'Token No valido'
        });
    };

    next();
};

module.exports = validarJWT;