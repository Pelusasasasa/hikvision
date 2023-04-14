const fs = require('fs');

const {request} = require('urllib');
const sharp = require('sharp');

request('http://192.168.1.101/ISAPI/Streaming/channels/101/picture',{
    digestAuth: "Lorenzatto:Lorenzatto12345"
}).then(async(res)=>{
    const processedImage = sharp(res.data);
    const resizeImageBuffer = await processedImage.toBuffer();
    console.log(resizeImageBuffer)

    fs.writeFileSync('nuevaRuta/Prueba.png',resizeImageBuffer)
});