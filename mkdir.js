const fs = require('fs')
fs.promises.mkdir('nuevacarpeta')
.then(()=>{
    console.log('se creo la carpeta')
})
.catch((error)=>{
    console.error('ocurrió un error', error)
})