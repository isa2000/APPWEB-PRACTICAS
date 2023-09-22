interface Pedido {
    id: number;
    idcliente: number;
    idproducto: number;
    fechaDePedido: string;
    estadoDePedido: boolean;
  }
  
  const pedidos: Pedido[] = [
    {
      id: 5,
      idcliente: 1,
      idproducto:3,
      fechaDePedido: '2023-09-21',
      estadoDePedido: false
    },
    {
      id: 4,
      idcliente: 2,
      idproducto:5,
      fechaDePedido: '2023-09-22',
      estadoDePedido: true
    },
    {
      id: 3,
      idcliente: 3,
      idproducto:1,
      fechaDePedido: '2023-09-23',
      estadoDePedido: false
    },
    {
        id: 2,
        idcliente: 4,
        idproducto:2,
        fechaDePedido: '2023-09-24',
        estadoDePedido: true
      },
      {
        id: 1,
        idcliente: 5,
        idproducto:4,
        fechaDePedido: '2023-09-25',
        estadoDePedido: false
      }
  ];
  
  //FOR EACH

  pedidos.forEach((pedido, indice) => {

    console.log(`Pedido ${indice + 1}:`);
    console.log(`Id: ${pedido.id}`);
    console.log(`Id del cliente: ${pedido.idcliente}`);
    console.log(`Id del producto : ${pedido.idproducto}`);
    console.log(`Fecha de Pedido: ${pedido.fechaDePedido}`);
    console.log(`Estado Disponible: ${pedido.estadoDePedido}`);
 
  });


  //FOR OF

  let indice = 1;
  for (const listapedido of pedidos) {
    console.log(`Pedido ${indice}:`);
    console.log(`Id: ${listapedido.id}`);
    console.log(`Id del cliente : ${listapedido.idcliente}`);
    console.log(`Id del producto: ${listapedido.idproducto}`);
    console.log(`Fecha de Pedido: ${listapedido.fechaDePedido}`);
    console.log(`Estado Disponible: ${listapedido.estadoDePedido}`);
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
      console.log(`Fecha de Pedido: ${Pedido.fechaDePedido}`);
      console.log(`Estado Disponible: ${Pedido.estadoDePedido}`);
    
    }
  }

  console.log(pedidos[0].id);            
  console.log(pedidos[1].fechaDePedido);  
  console.log(pedidos[2].estadoDePedido); 