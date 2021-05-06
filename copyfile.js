const fs = require('fs')
fs.promises.copyFile('nuevoarchivo.txt','copyofcreated.txt')
.then(()=>{
    console.log('se copio el archivo')
})
.catch((error)=>{
    console.error('ocurrió un error', error)
})