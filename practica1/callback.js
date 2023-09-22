
//IMPORTAR OBJETO

const pedidos = require ( './app.js');
console.log (pedidos);


//FUNCION DEL CALLBACK

function findpedidoForId (id, callback )
{
    const pedir = pedidos.find ((pedir)=> pedir.id===id);
    if (!pedir)
    {
        const error =new Error ();
        error.message ="pedido no encontrado";
        return callback(error);
    }
    return callback (null,pedir);
}
findpedidoForId (5, (err,pedir)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
})