"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { envs } from './config/plugins/envs.plugin'
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createPedido = () => __awaiter(void 0, void 0, void 0, function* () {
    const clienteCreated = yield prisma.cliente.create({
        data: {
            nombres: "isabel taboada",
            cedula: "1234897692",
            email: "isabel@gmail.com",
            fecha_nacimiento: "2000-04-13T00:00:01Z",
        }
    });
    console.log(clienteCreated);
    const productoCreated = yield prisma.producto.create({
        data: {
            nombre: "casco",
            precio: 100.99,
        }
    });
    console.log(productoCreated);
    const pedidoCreated = yield prisma.pedido.create({
        data: {
            id_cliente: clienteCreated.id_cliente,
            id_producto: productoCreated.id_producto,
            fecha_pedido: "2023-09-25T14:30:00Z",
            estado: "pendiente",
            total: 50.0,
            porcentaje_mantenimiento: 10.2
        }
    });
    console.log(pedidoCreated);
});
const queryPedido = () => __awaiter(void 0, void 0, void 0, function* () {
    const pedido = yield prisma.pedido.findMany({
        include: {
            cliente: true,
            producto: true
        },
        where: {
            Id_pedido: 1
        }
    });
    console.log(pedido);
});
const updatePedido = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.pedido.update({
        data: {
            estado: "finalizado"
        },
        where: {
            Id_pedido: 1
        }
    });
});
const deletePedido = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.pedido.delete({
        where: {
            Id_pedido: 1
        }
    });
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield createPedido();
    yield queryPedido();
}))();
