const { response } = require('express');
const Usuario = require('../models/user');

 const usersGet = (req, res = response) => {
    res.json({
        msg: 'Funcion userGet',
    });
};
const usersPost = (req, res = response) => {
    const body = req.body;
    const usuario = new Usuario(body);
    usuario.save();
    res.json({
        usuario
    });
};
const usersPatch = (req, res = response) => {
    res.json({
        msg: 'Funcion userPatch',
    });
};
const usersDelete = (req, res = response) => {
    res.json({
        msg: 'Funcion usersDelete',
    });
};

module.exports = {
    usersGet,
    usersPatch,
    usersPost,
    usersDelete
};