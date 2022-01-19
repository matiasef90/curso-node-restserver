const { response } = require('express');
const Usuario = require('../models/user');
const bcrypt = require('bcryptjs');

 const usersGet = (req, res = response) => {
    res.json({
        msg: 'Funcion userGet',
    });
};
const usersPost = async (req, res = response) => {
    const { name, email, password, role } = req.body;
    const usuario = new Usuario({name, email, password, role});
    //Encriptamos la contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    //Guardamos en DB
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