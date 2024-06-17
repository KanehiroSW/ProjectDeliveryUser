import { Producto } from "./Producto";

export interface DetallePedido {
    producto: Producto;
    cantidad: number;
    precioUnitario: number;
    totalDetalle: number;
}