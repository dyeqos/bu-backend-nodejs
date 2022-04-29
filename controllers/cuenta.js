const { response } = require('express');
const  { dbConnection } = require('../DB/config');
const Cuenta = require('../models/Cuenta');



const crearCuenta = (req, res = response) => {

    Cuenta.crear(req, dbConnection(), (err, datos) => {

        if(err){
            return res.status(400).json({
                ok: false,
                msg: "error" + err
            });
        }else{
            return res.json({
                ok: true,
                msg: 'ok',
                id: datos.insertId
            });
        }
    });

}

const modificarCuenta = (req, res = response) => {

    Cuenta.modificar(req, dbConnection(), (err,datos) => {
        if(err){
            return res.status(400).json({
                ok: false,
                msg: "error" + err
            });
        }else{
            return res.json({
                ok: true,
                msg: 'ok'
            });
        }
    });
}

const listarCuenta = (req, res = response) => {

    Cuenta.listar(  dbConnection(), (err, datos) => {
        
        if(err){
            return res.status(400).json({
                ok: false,
                msg: "error" + err
            });
        }else{
            return res.json({
                ok: true,
                msg: 'ok',
                datos
            });
        }
    } );
}

const verCuenta = (req, res = response) => {

    Cuenta.ver(req,  dbConnection(), (err, datos) => {
        
        if(err){
            return res.status(400).json({
                ok: false,
                msg: "error" + err
            });
        }else{
            return res.json({
                ok: true,
                msg: 'ok',
                datos
            });
        }
    } );
}

const verCuentaClie = (req, res = response) => {

    Cuenta.verCuentaCliente(req,  dbConnection(), (err, datos) => {
        
        if(err){
            return res.status(400).json({
                ok: false,
                msg: "error" + err
            });
        }else{
            return res.json({
                ok: true,
                msg: 'ok',
                datos
            });
        }
    } );
}

const eliminarCuenta = (req, res = response) => {

    Cuenta.eliminar(req, dbConnection(), (err, datos) => {

        if(err){
            return res.status(400).json({
                ok: false,
                msg: "error" + err
            });
        }else{
            return res.json({
                ok: true,
                msg: 'ok',
            });
        }
    });

}
module.exports = {
    crearCuenta,
    modificarCuenta,
    listarCuenta,
    eliminarCuenta,
    verCuenta,
    verCuentaClie,
}