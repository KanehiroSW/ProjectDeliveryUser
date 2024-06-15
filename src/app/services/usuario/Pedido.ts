import { Producto } from "./Producto";

export interface Pedido {
    numeroSerie: string;
    direccionEntrega: string;
    fechaPedido: Date;
    usuario: any;
    tienda: any;
    detallePedidos: Producto[];
    totalPedido: number;
    estadoPedido: string;
}