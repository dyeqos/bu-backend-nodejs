const mysql = require('mysql');
require('dotenv').config();

const dbConnection = () => {

    const dbConnections = mysql.createConnection({
        host: process.env.BD_CONEXION,
        user: process.env.BD_USER,
        password: process.env.BD_PASS ,
        database: process.env.BD_BD,
    });
    
           
    dbConnections.connect( (err) => {
        if(!err){
            console.log('Conexion Exitosa');
        }else{
            console.log('BASE OFF: ' + err);
        }
        
    });

    return dbConnections;
}


module.exports = {
   dbConnection
}