const fs = require('fs')
fs.promises.readFile('nuevoarchivo.txt','utf8')
.then((data)=>{
    console.log('se leyo el archivo', data)
})
.catch((error)=>{
    console.error('ocurrió un error', error)
})