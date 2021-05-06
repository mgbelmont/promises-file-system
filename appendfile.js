const fs = require('fs')
fs.promises.appendFile('nuevoarchivo.txt','agregando nuevo contenido')
.then(()=>{
    console.log('se agrego nuevo contenido')
})
.catch((error)=>{
    console.error('ocurrió un error', error)
})