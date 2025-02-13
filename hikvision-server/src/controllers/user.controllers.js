const bcrypt = require('bcryptjs');
const userCTRL = {};

const User = require('../model/User');
const { generarJWT } = require('../helpers/jtw');

//Creamos el usuario
userCTRL.createUser = async(req, res) => {

    const user = req.body;

    try {
        const findUser = await User.findOne({email: user.email});

        if(findUser){
            res.status(400).send({
                ok: false,
                msg: 'Ya existe un usuario con ese Email'
            });
        }

        const newUser = new User(user);

        await newUser.save();

        const token = await generarJWT(newUser._id, newUser.password);

        res.status(201).json({
            ok: true,
            token,
            newUser
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador',
            ok: false
        })
    }

};

//Logear El usuario con un token
userCTRL.loginUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese Email'
            });
        };


        //confirmamos la contrase
        const validPassword = bcrypt.compareSync(password, user.password);

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Password Incorrecto'
            })
        };

        const token = await generarJWT(user._id, user.password);

        res.status(200).json({
            ok: true,
            id: user._id,
            name: user.name,
            email: user.email,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

//Eliminar Usuario
userCTRL.deleteUser = async(req, res) => {

    const {id} = req.params;

    if(id !== req.uid){
        return res.status(401).json({
            ok: false,
            msg: 'No esta autorizado para eliminar este usuario'
        })
    };

    const userDelete = await User.findOneAndDelete({_id: id});

    res.status(200).json({
        ok: true,
        userDelete
    });

    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
    };

};

//Actualizar Usuario
userCTRL.updateUser = async(req, res) => {

    const { id } = req.params;

    if(id !== req.uid){
        return res.status(401).json({
            ok: false,
            msg: 'No esta autorizado para modificar este usuario'
        })
    };

    const body = req.body;

    try {
        const userUpdate = await User.findOneAndUpdate({_id: id}, body, {new: true});

        res.status(200).json({
            ok: true,
            userUpdate
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hablar con el administrador'
        });
    }

};


module.exports = userCTRL