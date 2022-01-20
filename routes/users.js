const { Router } = require('express');
const { check } = require('express-validator');

const { usersGet, usersPost, usersDelete, usersPut } = require('../controllers/users');
const { rolValido, emailRegistrado, existeUsuarioId } = require('../helpers/db-validators');
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
router.put('/:id', [
    check('id', 'No se consigno el id en la ruta').isMongoId(),
    check('id').custom(existeUsuarioId),
    check('role').custom(rolValido),
    validarCampos,
],usersPut);
router.delete('/:id', [
    check('id', 'No se consigno el id en la ruta').isMongoId(),
    check('id').custom(existeUsuarioId),
    validarCampos,
],usersDelete);

module.exports = router;