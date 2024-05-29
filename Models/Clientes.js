const con = require('../Configs/cone');

module.exports={
    getClienteByNit(nit_cliente){
        return new Promise((resolve,reject)=>{
            con.query( 'SELECT * FROM heroku_aa513e4da328873.clientes WHERE nit_cliente = ? ', nit_cliente, (err,rows)=> {
                if(err) reject(err);
                else resolve(rows);
            })
        })
    },   
}