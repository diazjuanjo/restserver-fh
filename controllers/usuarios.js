const { request, response } = require('express');

const usuariosGet = (req = request, res = response)=>{

    const query = req.query;

    res.json({
        msg: 'get API - Controller',
        query
    });
}

const usuariosPut = (req = request, res = response)=>{

    const id = req.params.id;

    res.json({
        msg: 'put API - Controller',
        id
    });
}

const usuariosPost = (req = request, res = response)=>{

    const { nombre, email} = req.body;

    res.json({
        msg: 'post API - Controller',
        nombre,
        email
    });
}

const usuariosDelete = (req = request, res = response)=>{
    res.json({
        msg: 'delete API - Controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
}