const { Schema, model } = require('mongoose');

const Video = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        requred: true
    },
    filePath: {
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    description: String,
}, {
    timestamps: true
});


module.exports = model('Video', Video);