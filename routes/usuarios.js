const {Router} = require('express')

const route = Router() 

const {usuarioGet, usuarioPost} = require('../controllers/usuario')

route.get('/', usuarioGet)  

route.post('/', usuarioPost)



module.exports = route