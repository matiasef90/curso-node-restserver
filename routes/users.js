const { Router } = require('express');
const { check } = require('express-validator');

const { usersGet, usersPost, usersPatch, usersDelete } = require('../controllers/users');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router();

router.get('/', usersGet);
router.post('/', [
    check('name', 'El nombre es obligatoria').not().isEmpty(),
    check('email', 'Debes ingresar un email válido').isEmail(),
    check('password', 'El contraseña debe tener mas de 6 caracteres').isLength({min: 6}),
    check('role', 'El rol ingresado no es valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos,
] ,usersPost);
router.patch('/', usersPatch);
router.delete('/', usersDelete);

module.exports = router;