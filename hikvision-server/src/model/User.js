const  {Schema, Model} = require('mongoose');

const User = new Schema({

    name: {
        type: String,
        required: true,
        set: (value => value.toUpperCase().trim())
    },
    email: {
        type: String,
        required: true,
        unique: true,
        set: (value => value.toUpperCase().trim())
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = model('User', User);