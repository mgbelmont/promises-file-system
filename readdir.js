const fs = require('fs')
fs.promises.readdir('nuevacarpeta')
.then((files)=>{
    console.log('Datos de la carpeta', files)
})
.catch((error)=>{
    console.error('ocurrió un error', error)
})