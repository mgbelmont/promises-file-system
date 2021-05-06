const fs = require('fs')
fs.promises.unlink('nuevoarchivo.txt')
.then(()=>{
    console.log('Se elimino el archivo')
})
.catch((error)=>{
    console.error('ocurrió un error', error)
})