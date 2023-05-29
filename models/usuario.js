const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    ambiente: {
        type: Number,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },

    hora:{
        type: String,
        required: true
    },

    temperatura:{
        type: Number,
        required: true
    },

    nombre:{
        type: String,
        required: true
    }
})

module.exports = model('Usuario', UsuarioSchema);