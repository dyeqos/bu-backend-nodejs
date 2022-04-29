const { response } = require('express');
const { dbConnection } = require('../DB/config');
const { listarDocumento, listarSucursal, listarMoneda, listarProductos } = require('../models/parametros');

const listarDocu = (req, res = response) => {

    listarDocumento( dbConnection(), (err, datos) => {
        
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

const listarMone = (req, res = response) => {

    listarMoneda( dbConnection(), (err, datos) => {
        
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

const listarSucu = (req, res = response) => {

    listarSucursal ( dbConnection(), (err, datos) => {
        
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

const listarProduc = (req, res = response) => {

    listarProductos ( dbConnection(), (err, datos) => {
        
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

module.exports = {
    listarDocu,
    listarMone,
    listarSucu,
    listarProduc,
}