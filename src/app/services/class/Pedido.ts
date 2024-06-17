import { Usuario } from "../auth/Usuario";
import { DetallePedido } from "../usuario/DetallePedido";
import { Tienda } from "../usuario/Tienda";

export class Pedido {
    numeroSerie?: string;
    direccionEntrega?: string;
    fechaPedido?: Date;
    usuario!: Usuario;
    tienda!: Tienda;
    detallePedidos: DetallePedido[] = [];
    totalPedido!: number;
    estadoPedido?: string;

    constructor() {}
}
