const { response } = require('express');
const  { dbConnection } = require('../DB/config');
const Cliente = require('../models/Cliente');



const crearCliente = (req, res = response) => {

    Cliente.crear(req, dbConnection(), (err, datos) => {
        
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

const modificarCliente = (req, res = response) => {

    Cliente.modificar(req, dbConnection(), (err,datos) => {
        
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

const listarCliente = (req, res = response) => {
    
    Cliente.listar(  dbConnection(), (err, datos) => {
        
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

const verCliente = (req, res = response) => {
    
    Cliente.ver( req, dbConnection(), (err, datos) => {
        
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

const eliminarCliente = (req, res = response) => {

    Cliente.eliminar(req, dbConnection(), (err, datos) => {

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
    crearCliente,
    modificarCliente,
    listarCliente,
    eliminarCliente,
    verCliente,
}