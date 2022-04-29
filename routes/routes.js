const { Router } = require('express');
const { check } = require('express-validator');
const { crearCliente, modificarCliente, listarCliente, eliminarCliente, verCliente } = require('../controllers/cliente');
const { listarCuenta, crearCuenta, modificarCuenta, eliminarCuenta, verCuenta, verCuentaClie } = require('../controllers/cuenta');
const { listarDocu, listarMone, listarSucu, listarProduc } = require('../controllers/parametros');
const { validarCampos } = require('../middlewares/validarCampos');

const router = Router();

//crear cliente
router.post('/cliente',[
    check( 'nombre', 'El nombre es obligatorio y debe ser todo en mayusculas').isString().isUppercase(),
    check( 'tipoDocu', 'El tipo documento es obligatorio').isNumeric(),
    check( 'docuIdentidad', 'El numero de documento es obligatorio y debe ser todo en mayusculas').isString().isUppercase(),
    check( 'nacimiento', 'La fecha de nacimiento es obligatorio con formato yyyy-mm-dd').isString().isDate({format: 'YYYY-MM-DD'}),
    check( 'genero', 'El género es obligatorio y debe ser todo en mayusculas').isString().isUppercase(),
    validarCampos
], crearCliente );

//modificar cliente
router.put('/cliente',
[
    check( 'id_cliente', 'El id es obligatorio').isNumeric(),
    check( 'nombre', 'El nombre es obligatorio').isString().isUppercase(),
    check( 'tipoDocu', 'El tipo documento es obligatorio').isNumeric(),
    check( 'docuIdentidad', 'El numero de documento es obligatorio').isString().isUppercase(),
    check( 'nacimiento', 'La fecha de nacimiento es obligatorio').isString().isDate({format: 'YYYY-MM-DD'}),
    check( 'genero', 'El genero es obligatorio').isString().isUppercase(),
    validarCampos
], modificarCliente );

//ver clientes
router.get('/cliente', listarCliente );
router.get('/cliente/:id', verCliente )

//eliminar clientes
router.delete('/cliente',[
    check( 'id_cliente', 'El id es obligatorio').isNumeric()
], eliminarCliente );



//ver cuentas
router.get('/cuenta', listarCuenta );
router.get('/cuenta/:id', verCuenta );
router.get('/cuenta-cliente/:id', verCuentaClie );

//crear cuenta
router.post('/cuenta',[
    check( 'tipoProduc', 'El tipo de producto es obligatorio').isNumeric(),
    check( 'numCuenta', 'El numero de cuenta es obligatorio').isNumeric(),
    check( 'moneda', 'El tipo de moneda es obligatorio').isNumeric(),
    check( 'monto', 'El monto es obligatorio').isDecimal(),
    check( 'fecha', 'La fecha es obligatorio').isString().isDate({format: 'YYYY-MM-DD'}),
    check( 'sucursal', 'La sucursal es obligatorio').isNumeric(),
    check( 'cliente', 'El cliente es obligatorio').isNumeric(),
    validarCampos
], crearCuenta );

//modificar cuenta
router.put('/cuenta',[
    check( 'id_cuenta', 'El id es obligatorio').isNumeric(),
    check( 'tipoProduc', 'El tipo de producto es obligatorio').isNumeric(),
    check( 'numCuenta', 'El numero de cuenta es obligatorio').isNumeric(),
    check( 'moneda', 'El tipo de moneda es obligatorio').isNumeric(),
    check( 'monto', 'El monto es obligatorio').isDecimal(),
    check( 'fecha', 'La fecha es obligatorio').isString().isDate({format: 'YYYY-MM-DD'}),
    check( 'sucursal', 'La sucursal es obligatorio').isNumeric(),
    validarCampos
], modificarCuenta );

//eliminar cuenta
router.delete('/cuenta',[
    check( 'id_cuenta', 'El id es obligatorio').isNumeric()
], eliminarCuenta );

//parametros
router.get('/tipo-documentos', listarDocu );
router.get('/moneda', listarMone );
router.get('/sucursal', listarSucu );
router.get('/productos', listarProduc );


module.exports = router; 