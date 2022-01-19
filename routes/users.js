const { Router } = require('express');
const { check } = require('express-validator');

const { usersGet, usersPost, usersPatch, usersDelete } = require('../controllers/users');
const { rolValido, emailRegistrado } = require('../helpers/db-validators');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router();

router.get('/', usersGet);
router.post('/', [
    check('name', 'El nombre es obligatoria').not().isEmpty(),
    check('email', 'Debes ingresar un email válido').isEmail(),
    check('email').custom(emailRegistrado),
    check('password', 'El contraseña debe tener mas de 6 caracteres').isLength({min: 6}),
    // check('role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(rolValido),
    validarCampos,
] ,usersPost);
router.patch('/', usersPatch);
router.delete('/', usersDelete);

module.exports = router;