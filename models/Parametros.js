const listarDocumento = (conexion, funcion) => {
    const sql = `SELECT 
                    ID_PARAMETRO,
                    NOMBRE
                FROM PARAMETROS
                WHERE AUD_ESTADO <> 3
                    AND TIPO='TIPO_DOCUMENTO' `;
    conexion.query(sql, funcion);
    conexion.end();
}

const listarMoneda = (conexion, funcion) => {
    const sql = `SELECT 
                    ID_PARAMETRO,
                    NOMBRE
                FROM PARAMETROS
                WHERE AUD_ESTADO <> 3
                    AND TIPO='MONEDA' `;
    conexion.query(sql, funcion);
    conexion.end();
}

const listarSucursal = (conexion, funcion) => {
    const sql = `SELECT 
                    ID_PARAMETRO,
                    NOMBRE
                FROM PARAMETROS
                WHERE AUD_ESTADO <> 3
                    AND TIPO='SUCURSAL' `;
    conexion.query(sql, funcion);
    conexion.end();
}

const listarProductos = (conexion, funcion) => {
    const sql = `SELECT 
                    ID_PARAMETRO,
                    NOMBRE
                FROM PARAMETROS
                WHERE AUD_ESTADO <> 3
                    AND TIPO='TIPO_PRODUCTO' `;
    conexion.query(sql, funcion);
    conexion.end();
}

module.exports = {
    listarDocumento,
    listarMoneda,
    listarSucursal,
    listarProductos,
}