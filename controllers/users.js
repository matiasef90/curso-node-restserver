const { response } = require('express');

 const usersGet = (req, res = response) => {
    res.json({
        msg: 'Funcion userGet',
    });
};
const usersPost = (req, res = response) => {
    const { nombre, apellido, edad } = req.body;
    res.json({
        msg: 'Funcion userPost',
        nombre,
        apellido,
        edad,
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