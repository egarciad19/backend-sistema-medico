const con = require('../Configs/cone');

module.exports={

    getAsociarBycodigoMuestra(codigoMuestra){
        return new Promise((resolve,reject)=>{
            con.query( 'SELECT me.*, ca.nombre as tipo_muestra, le.nombre as nombre_unidad FROM heroku_aa513e4da328873.muestras as me '+
            'inner join heroku_aa513e4da328873.datos_catalogos as ca on me.codigo_tipo_muestra = ca.codigo_dato_catalogo '+
            'inner join heroku_aa513e4da328873.datos_catalogos as le on me.unidad_medica= le.codigo_dato_catalogo '+
            'WHERE codigo_muestra = ?', codigoMuestra, (err,rows)=> {
                if(err) reject(err);
                else resolve(rows);
            })
        })
    },

    agregarItems(muestra){
        return new Promise((resolve,reject)=>{
            let query='UPDATE heroku_aa513e4da328873.muestras SET cantidadMuestras = ?, itemsAsociados = ?, fecha_modificacion = ?, usuario_modificacion = ?, ip_usuario_modificacion = ? WHERE codigo_muestra = ?';
            console.log(muestra)
            con.query(query,[muestra.cantidadMuestras,
                muestra.itemsAsociados,
                muestra.fecha_modificacion,
                muestra.usuario_modificacion,
                muestra.ip_usuario_modificacion,
                muestra.codigo_muestra],(err,rows)=>{
                if(err) reject(err);
                else resolve (true);

            });
        });
    },

    agregarItemsSolicitud(muestra){
        return new Promise((resolve,reject)=>{
            let query='UPDATE heroku_aa513e4da328873.solicitudes_de_muestras SET cantidad_de_muestras = ?, dias_de_items = ?, fecha_modificacion = ?, usuario_modificacion = ?, ip_usuario_modificacion = ? WHERE codigo_solicitud = ?';
            console.log(muestra)
            con.query(query,[muestra.cantidad_de_muestras,
                muestra.dias_de_items,
                muestra.fecha_modificacion,
                muestra.usuario_modificacion,
                muestra.ip_usuario_modificacion,
                muestra.codigo_solicitud],(err,rows)=>{
                if(err) reject(err);
                else resolve (true);

            });
        });
    },

    insertMuestras(muestras){
        return new Promise((resolve,reject)=>{
            let query='INSERT INTO heroku_aa513e4da328873.muestras SET ?';
            con.query(query,[muestras],(err,rows)=>{
                if(err) reject(err);
                else resolve (true);
            }); 
        });
    },

    insertEtiqueta(muestras){
        return new Promise((resolve,reject)=>{
            let query='INSERT INTO heroku_aa513e4da328873.etiqueta_de_muestra SET ?';
            con.query(query,[muestras],(err,rows)=>{
                if(err) reject(err);
                else resolve (true);
            }); 
        });
    },

    getAllMuestras(){
        return new Promise((resolve,reject)=>{
            con.query('select * from heroku_aa513e4da328873.muestras',(err,rows)=>{
                if(err) reject(err);
                else resolve(rows);
            })
        })
    }, 

    getItemsAsociados(codigo_muestra){
        return new Promise((resolve,reject)=>{
            con.query('select m.* from heroku_aa513e4da328873.muestras m where m.codigo_muestra = ?', codigo_muestra,(err,rows)=>{
                if(err) reject(err);
                else resolve(rows);
            })
        })
    }, 
}