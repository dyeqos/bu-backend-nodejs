const listar = (conexion, funcion) => {
    const sql = `SELECT
                    CLIE.ID_CLIENTE,
                    CLIE.NOMBRES,
                    CLIE.PATERNO,
                    CLIE.MATERNO,
                    CLIE.TIPO_DOCUMENTO,
                    PARA.NOMBRE AS DOCUMENTO,
                    CLIE.DOCUMENTO_IDENTIDAD,
                    CLIE.FECHA_NACIMIENTO,
                    IF(CLIE.GENERO = 'M', 'MASCULINO','FEMENINO') AS GENERO,
                    CLIE.GENERO AS GENERO_CHAR,
                    CONCAT(CLIE.NOMBRES,' ',CLIE.PATERNO,' ', CLIE.MATERNO) AS COMPLETO
                FROM CLIENTES CLIE
                    INNER JOIN PARAMETROS PARA
                        ON CLIE.TIPO_DOCUMENTO = PARA.ID_PARAMETRO 
                                                AND PARA.TIPO = 'TIPO_DOCUMENTO'
                                                AND PARA.AUD_ESTADO <> 3 
                WHERE 
                    CLIE.AUD_ESTADO <> 3`;
    conexion.query(sql ,funcion);
    conexion.end();
}

const ver = (req, conexion, funcion) => {
    const sql = `SELECT
                    CLIE.ID_CLIENTE,
                    CLIE.NOMBRES,
                    CLIE.PATERNO,
                    CLIE.MATERNO,
                    CLIE.TIPO_DOCUMENTO,
                    PARA.NOMBRE AS DOCUMENTO,
                    CLIE.DOCUMENTO_IDENTIDAD,
                    CLIE.FECHA_NACIMIENTO,
                    IF(CLIE.GENERO = 'M', 'MASCULINO','FEMENINO') AS GENERO,
                    CLIE.GENERO AS GENERO_CHAR
                FROM CLIENTES CLIE
                    INNER JOIN PARAMETROS PARA
                        ON CLIE.TIPO_DOCUMENTO = PARA.ID_PARAMETRO 
                                                AND PARA.TIPO = 'TIPO_DOCUMENTO'
                                                AND PARA.AUD_ESTADO <> 3 
                WHERE 
                    CLIE.AUD_ESTADO <> 3
                AND CLIE.ID_CLIENTE = ${ req.params.id }`;
    conexion.query(sql ,funcion);
    conexion.end();
}


crear.save();



const crear = (req, conexion, funcion ) => {
    
    const sql = `INSERT INTO 
                        CLIENTES(
                            NOMBRES,
                            PATERNO,
                            MATERNO,
                            TIPO_DOCUMENTO,
                            DOCUMENTO_IDENTIDAD,
                            FECHA_NACIMIENTO,
                            GENERO,
                            AUD_ESTADO)
                    VALUES(
                        '${ req.body.nombre }',
                        '${ req.body.paterno }',
                        '${ req.body.materno }',
                        '${ req.body.tipoDocu }',
                        '${ req.body.docuIdentidad }',
                        '${ req.body.nacimiento }',
                        '${ req.body.genero }',
                        1
                    )`;

    conexion.query( sql, funcion );
    conexion.end();
}

const modificar = ( req, conexion, funcion ) => {
    const sql = `UPDATE CLIENTES
                    SET
                        NOMBRES = '${ req.body.nombre }',
                        PATERNO = '${ req.body.paterno }',
                        MATERNO = '${ req.body.materno }',
                        TIPO_DOCUMENTO = '${ req.body.tipoDocu }',
                        DOCUMENTO_IDENTIDAD = '${ req.body.docuIdentidad }',
                        FECHA_NACIMIENTO = '${ req.body.nacimiento }',
                        GENERO = '${ req.body.genero }',
                        AUD_ESTADO = 2
                    WHERE ID_CLIENTE = ${ req.body.id_cliente } `;
    
    conexion.query( sql, funcion );
    conexion.end();
}

const eliminar = (req, conexion, funcion ) => {
    const sql = `UPDATE CLIENTES
                    SET 
                        AUD_ESTADO = 3
                    WHERE ID_CLIENTE = ${ req.body.id_cliente } `;
                    
    conexion.query( sql, funcion );
    conexion.end();
}

module.exports = {
    listar,
    crear,
    modificar,
    eliminar,
    ver,
}