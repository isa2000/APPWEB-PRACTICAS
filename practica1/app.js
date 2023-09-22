

//ARREGLO DE OBJETO
const pedidos=[
    {
        id:1,
        idcliente:2,
        idproducto:5,
        fechapedido:"2023-09-21",
        estadodepedido:false
        
    },
    {
        id:2,
        idcliente:4,
        idproducto:3,
        fechapedido:"2023-09-22",
        estadodepedido:false
        
    },
    {
        id:3,
        idcliente:1,
        idproducto:4,
        fechapedido:"2023-09-23",
        estadodepedido:true
        
    },
    {
        id:4,
        idcliente:5,
        idproducto:2,
        fechapedido:"2023-09-24",
        estadodepedido:true
       
    },
    {
        id:5,
        idcliente:3,
        idproducto:1,
        fechapedido:"2023-09-26",
        estadodepedido:true,
        
    },
]


//FOR EACH

pedidos.forEach((pedido, indice) => {

    console.log(`Pedido ${indice + 1}:`);
    console.log(`Id: ${pedido.id}`);
    console.log(`Id del cliente: ${pedido.idcliente}`);
    console.log(`Id del producto : ${pedido.idproducto}`);
    console.log(`Fecha de Pedido: ${pedido.fechapedido}`);
    console.log(`Estado Disponible: ${pedido.estadodepedido}`);
 
  });


//FOR OF

  let indice = 1;
for (const listapedido of pedidos) {
  console.log(`Pedido ${indice}:`);
  console.log(`Id: ${listapedido.id}`);
  console.log(`Id del cliente : ${listapedido.idcliente}`);
  console.log(`Id del producto: ${listapedido.idproducto}`);
  console.log(`Fecha de Pedido: ${listapedido.fechapedido}`);
  console.log(`Estado Disponible: ${listapedido.estadodepedido}`);
  indice++;
}


//FOR IN 

for (let indice in pedidos) {
    if (pedidos.hasOwnProperty(indice)) {
      const Pedido = pedidos[indice];
      console.log(`Pedido ${parseInt(indice) + 1}:`);
      console.log(`Id: ${Pedido.id}`);
      console.log(`Id del cliente: ${Pedido.idcliente}`);
      console.log(`Id del producto: ${Pedido.idproducto}`);
      console.log(`Fecha de Pedido: ${Pedido.fechapedido}`);
      console.log(`Estado Disponible: ${Pedido.estadodepedido}`);
    
    }
  }


//EXPORTAR OBJETO

  module.exports= pedidos;