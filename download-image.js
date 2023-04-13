const fs = require('fs');
const request = require('request');

let dowload = function(uri,filename,callback) {
    request.head(uri,function(err,res,body){

        request(uri).pipe(fs.createWriteStream(filename)).on('close',callback);
    })
}

module.exports = {
    dowload
};