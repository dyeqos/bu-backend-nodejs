const listar = (conexion, funcion) => {
    const sql = `SELECT 
                    CUEN.ID_CUENTA,
                    CUEN.TIPO_PRODUCTO,
                    PROD.NOMBRE AS PRODUCTO,
                    CUEN.NUMERO_CUENTA,
                    CUEN.MONEDA AS ID_MONEDA,
                    MONE.NOMBRE AS MONEDA,
                    CUEN.MONTO,
                    CUEN.FECHA_CREACION,
                    CUEN.SUCURSAL AS ID_SUCURSAL,
                    SUCU.NOMBRE AS SUCURSAL,
                    CUEN.CLIENTE_ID,
                    CONCAT(CLIE.NOMBRES,' ',CLIE.PATERNO,' ',CLIE.MATERNO) AS CLIENTE
                FROM 
                    CUENTAS CUEN 
                INNER JOIN PARAMETROS PROD
                    ON CUEN.TIPO_PRODUCTO = PROD.ID_PARAMETRO AND PROD.TIPO = 'TIPO_PRODUCTO'
                INNER JOIN PARAMETROS MONE
                    ON CUEN.MONEDA = MONE.ID_PARAMETRO AND MONE.TIPO = 'MONEDA'
                INNER JOIN PARAMETROS SUCU
                    ON CUEN.SUCURSAL = SUCU.ID_PARAMETRO AND SUCU.TIPO = 'SUCURSAL'
                INNER JOIN CLIENTES CLIE
                    ON CUEN.CLIENTE_ID = CLIE.ID_CLIENTE AND CLIE.AUD_ESTADO <> 3

                WHERE CUEN.AUD_ESTADO <> 3`;
    conexion.query(sql, funcion);
    conexion.end();
}

const ver = (req, conexion, funcion) => {
    const sql = `SELECT 
                    CUEN.ID_CUENTA,
                    CUEN.TIPO_PRODUCTO,
                    PROD.NOMBRE AS PRODUCTO,
                    CUEN.NUMERO_CUENTA,
                    CUEN.MONEDA AS ID_MONEDA,
                    MONE.NOMBRE AS MONEDA,
                    CUEN.MONTO,
                    CUEN.FECHA_CREACION,
                    CUEN.SUCURSAL AS ID_SUCURSAL,
                    SUCU.NOMBRE AS SUCURSAL,
                    CUEN.CLIENTE_ID,
                    CONCAT(CLIE.NOMBRES,' ',CLIE.PATERNO,' ',CLIE.MATERNO) AS CLIENTE
                FROM 
                    CUENTAS CUEN 
                INNER JOIN PARAMETROS PROD
                    ON CUEN.TIPO_PRODUCTO = PROD.ID_PARAMETRO AND PROD.TIPO = 'TIPO_PRODUCTO'
                INNER JOIN PARAMETROS MONE
                    ON CUEN.MONEDA = MONE.ID_PARAMETRO AND MONE.TIPO = 'MONEDA'
                INNER JOIN PARAMETROS SUCU
                    ON CUEN.SUCURSAL = SUCU.ID_PARAMETRO AND SUCU.TIPO = 'SUCURSAL'
                INNER JOIN CLIENTES CLIE
                    ON CUEN.CLIENTE_ID = CLIE.ID_CLIENTE AND CLIE.AUD_ESTADO <> 3

                WHERE CUEN.AUD_ESTADO <> 3
                AND CUEN.ID_CUENTA = ${ req.params.id }`;
    conexion.query(sql, funcion);
    conexion.end();
}

const verCuentaCliente = (req, conexion, funcion) => {
    const sql = `SELECT 
                    CUEN.ID_CUENTA,
                    CUEN.TIPO_PRODUCTO,
                    PROD.NOMBRE AS PRODUCTO,
                    CUEN.NUMERO_CUENTA,
                    CUEN.MONEDA AS ID_MONEDA,
                    MONE.NOMBRE AS MONEDA,
                    CUEN.MONTO,
                    CUEN.FECHA_CREACION,
                    CUEN.SUCURSAL AS ID_SUCURSAL,
                    SUCU.NOMBRE AS SUCURSAL,
                    CUEN.CLIENTE_ID,
                    CONCAT(CLIE.NOMBRES,' ',CLIE.PATERNO,' ',CLIE.MATERNO) AS CLIENTE
                FROM 
                    CUENTAS CUEN 
                INNER JOIN PARAMETROS PROD
                    ON CUEN.TIPO_PRODUCTO = PROD.ID_PARAMETRO AND PROD.TIPO = 'TIPO_PRODUCTO'
                INNER JOIN PARAMETROS MONE
                    ON CUEN.MONEDA = MONE.ID_PARAMETRO AND MONE.TIPO = 'MONEDA'
                INNER JOIN PARAMETROS SUCU
                    ON CUEN.SUCURSAL = SUCU.ID_PARAMETRO AND SUCU.TIPO = 'SUCURSAL'
                INNER JOIN CLIENTES CLIE
                    ON CUEN.CLIENTE_ID = CLIE.ID_CLIENTE AND CLIE.AUD_ESTADO <> 3

                WHERE CUEN.AUD_ESTADO <> 3
                AND CUEN.CLIENTE_ID = ${ req.params.id }`;
    conexion.query(sql, funcion);
    conexion.end();
}

const crear = (req, conexion, funcion ) => {
    
    const sql = `INSERT INTO 
                        CUENTAS(
                            TIPO_PRODUCTO,
                            NUMERO_CUENTA,
                            MONEDA,
                            MONTO,
                            FECHA_CREACION,
                            SUCURSAL,
                            CLIENTE_ID,
                            AUD_ESTADO)
                    VALUES(
                        '${ req.body.tipoProduc }',
                        '${ req.body.numCuenta }',
                        '${ req.body.moneda }',
                        '${ req.body.monto }',
                        '${ req.body.fecha }',
                        '${ req.body.sucursal }',
                        '${ req.body.cliente }',
                        1
                    )`;

    conexion.query( sql, funcion );
    conexion.end();
}

const modificar = ( req, conexion, funcion ) => {
    const sql = `UPDATE CUENTAS
                    SET
                        TIPO_PRODUCTO = '${ req.body.tipoProduc }',
                        NUMERO_CUENTA = '${ req.body.numCuenta }',
                        MONEDA = '${ req.body.moneda }',
                        MONTO = '${ req.body.monto }',
                        FECHA_CREACION = '${ req.body.fecha }',
                        SUCURSAL = '${ req.body.sucursal }',
                        AUD_ESTADO = 2
                    WHERE ID_CUENTA = ${ req.body.id_cuenta } `;
    
    conexion.query( sql, funcion );
    conexion.end();
}

const eliminar = (req, conexion, funcion ) => {
    const sql = `UPDATE CUENTAS
                    SET 
                        AUD_ESTADO = 3
                    WHERE ID_CUENTA = ${ req.body.id_cuenta } `;
                    
    conexion.query( sql, funcion );
    conexion.end();
}

module.exports = {
    listar,
    crear,
    modificar,
    eliminar,
    ver,
    verCuentaCliente,
}