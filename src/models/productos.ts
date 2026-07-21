import { Estado } from './estado';

export interface Producto {
    idProducto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    categoria: string;
    Estado: Estado;
};