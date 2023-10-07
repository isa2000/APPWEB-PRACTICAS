// import { envs } from './config/plugins/envs.plugin'
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const createPedido= async ()=>{
    const clienteCreated= await prisma.cliente.create({
        data:{
            nombres:"isabel taboada",
            cedula: "1234897692",
            email:"isabel@gmail.com",
            telefono:"0999234456",
            fecha_nacimiento:"2000-04-13T00:00:01Z",

            
        }
    })
    console.log(clienteCreated)
    const productoCreated= await prisma.producto.create({
        data:{
            nombre:"casco",
            precio:100.99,
            descripcion:"casco color azul, tipo motocicleta"      
        }
    })

    console.log(productoCreated);
    
    const pedidoCreated= await prisma.pedido.create({
        data:{
            id_cliente: clienteCreated.id_cliente,
            id_producto: productoCreated.id_producto,
            fecha_pedido: "2023-09-25T14:30:00Z",
            estado:"pendiente",
            total: 50.0,
            porcentaje_mantenimiento: 10.2
        }
    });
    console.log(pedidoCreated)
    
}

const queryPedido= async ()=>{
    const pedido= await prisma.pedido.findMany({
        include:{
            cliente:true,
            producto:true
        }
        , where:{
            Id_pedido:1
        }
    })
    console.log(pedido)
}

const updatePedido= async ()=>{
    const user= await prisma.pedido.update({
        data:{
            estado:"finalizado"
        },
        where:{
            Id_pedido:1
        }
    })
}

const deletePedido= async ()=>{
    const user= await prisma.pedido.delete({
        where:{
            Id_pedido:1
        }
    })
}

(async ()=>{
    await createPedido()
    await queryPedido()

})()
