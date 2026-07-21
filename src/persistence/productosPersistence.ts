import { readFile, writeFile } from 'fs/promises';
import { Producto } from '../models/productos';

const ruta = "./src/data/productos.json";

export async function leerProductos(): Promise<Producto[]> {
    try {
        const datos = await readFile(ruta, "utf-8");
        return JSON.parse(datos);
    } catch {
        return [];
    }
}

export async function guardarProductos(productos: Producto[]): Promise<void> {
    await writeFile(
        ruta,
        JSON.stringify(productos, null, 2),
        "utf-8"
    );
}