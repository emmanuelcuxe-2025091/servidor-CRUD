import { Estado } from './estado';

export interface Cliente {
    idCliente: number;
    nombreCliente: string;
    apellido: string;
    correo: Date;
    telefono: string;
    direccion: string;
    estado: Estado;
};