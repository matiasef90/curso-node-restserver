const { response, request } = require('express');
const Usuario = require('../models/user');
const bcrypt = require('bcryptjs');

 const usersGet = async (req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    const query = { state: true };
    const [ usuarios, total ] = await Promise.all([
        Usuario.find(query)
        .limit(Number(limite))
        .skip(Number(desde)),
        Usuario.countDocuments(query)
    ])
    res.json({
        total,
        usuarios,
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
const usersPut = async (req, res = response) => {
    const { id } = req.params;
    const {_id, password, google, email, ...resto } = req.body;
    if (password) {
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync(password, salt);
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    res.json({
        msg: 'put Api - Usuario Put',
        usuario
    });
};
const usersDelete = (req, res = response) => {
    res.json({
        msg: 'Funcion usersDelete',
    });
};

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
};