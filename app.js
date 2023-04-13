const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const axios = require('axios');


const storageStrategy = multer.memoryStorage();
const upload = multer({storage: storageStrategy});

const app = express();


app.use(express.json());


app.post('/imagen', upload.single('imagen') ,async(req,res)=>{
    const imagen = req.file;
    const processedImage = sharp(imagen.buffer);
    const resizeImage = processedImage.resize(800,200,{
        fit:'contain',
        background: "#fff"
    });
    const resizeImageBuffer = await resizeImage.toBuffer();
    console.log(resizeImageBuffer)

    fs.writeFileSync('nuevaRuta/Prueba.png',resizeImageBuffer)


    res.send('Hola mundo desde POST');
});

app.listen(3000)
