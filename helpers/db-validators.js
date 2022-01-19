const Role = require('../models/role');
const Usuario = require('../models/user');

const rolValido = async (role = '') => {
    const isRol = await Role.findOne({role});
    if (!isRol) {
        throw new Error(`El rol ${role} no se encuentra en la DB`);
    }
};
const emailRegistrado = async (email) => {
    const existeEmail = await Usuario.findOne({email});
    if (existeEmail) {
        throw new Error('El email se ya ha sido registrado');
    }
};

module.exports = {
    rolValido,
    emailRegistrado,
}