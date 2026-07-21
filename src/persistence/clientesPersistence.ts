import { readFile, writeFile } from 'fs/promises';
import { Cliente } from '../models/clientes';

const ruta = "./src/data/clientes.json";

export async function leerClientes(): Promise<Cliente[]> {
    try {
        const datos = await readFile(ruta, "utf-8");
        return JSON.parse(datos);
    } catch {
        return [];
    }
}

export async function guardarClientes(clientes: Cliente[]): Promise<void> {
    await writeFile(
        ruta,
        JSON.stringify(clientes, null, 2),
        "utf-8"
    );
}