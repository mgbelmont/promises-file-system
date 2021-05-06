const fs = require('fs')
fs.promises.rmdir('nuevacarpeta', { recursive: true })
.then(()=>{
    console.log('se elimino la carpeta')
})
.catch((error)=>{
    console.error('ocurrió un error', error)
})