const jwt = require('jsonwebtoken');
require('dotenv').config();

const generarJWT = (uid, password) => {
    return new Promise((resolve, reject) => {
        const payload = {uid, password};

        jwt.sign(payload, process.env.JTW, {
            expiresIn: '12h'
        }, (err, token) => {
            if (err){
                console.log(err);
                reject('No s epudo gener el token')
            };
            resolve( token )
        })
    })
};

module.exports = {
    generarJWT
};