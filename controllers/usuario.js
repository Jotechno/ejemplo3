const {response} = require('express')

//Importar modelos
const Usuario = require('../models/usuario')


const usuarioGet = async (req, res = response) => {
   
    const usuarios = await Usuario.find()

    res.json({
        usuarios
    })
}   

const usuarioPost = async (req, res = response) => {
    const body = req.query //CAptura dde atributos
    const usuario = new Usuario(body)
    usuario.save()

    res.json({
        msg: 'Exito en la inserción'
    })
}


module.exports ={
    usuarioGet,
    usuarioPost
}