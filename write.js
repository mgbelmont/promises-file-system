

const fs = require('fs')
fs.promises.writeFile('nuevoarchivo.txt', 'mi contenido')
.then(()=>{
    console.log('se escribio el archivo')
})
.catch((error)=>{
    console.error('ocurrió un error', error)
})
/*
async function principal(){
    await fs.promises.writeFile('nuevo.txt', 'nuevo contenido')
}

principal()
.then(()=>{
    console.log('se escribio el archivo')
})
.catch((error)=>{
    console.error('ocurrió un error', error)
})*/