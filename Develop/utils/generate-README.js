const fs = require('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if an error happens, it will send to catch
            if (err) {
                reject(err);
                
                return;
            }
            // if everything went well, resolve the promise and send the successful data to the `.then()` method
       resolve({
        ok: true,
        message: 'File Created!'
       }); 
    });
    });
};
module.exports =(writeFile);