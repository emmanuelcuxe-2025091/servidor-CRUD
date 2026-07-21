import { Producto } from "../models/productos";
import { leerProductos, guardarProductos } from "../persistence/productosPersistence";

export class ProductoService {

    async listar(): Promise<Producto[]> {

        return await leerProductos();

    }

    async buscar(id: number): Promise<Producto | undefined> {

        const productos = await leerProductos();

        return productos.find(producto => producto.idProducto === id);

    }

    async agregar(producto: Producto): Promise<void> {

        const productos = await leerProductos();

        productos.push(producto);

        await guardarProductos(productos);

    }

    async actualizar(producto: Producto): Promise<boolean> {

        const productos = await leerProductos();

        const indice = productos.findIndex(
            p => p.idProducto === producto.idProducto
        );

        if (indice === -1) {

            return false;

        }

        productos[indice] = producto;

        await guardarProductos(productos);

        return true;

    }

    async eliminar(id: number): Promise<boolean> {

        const productos = await leerProductos();

        const nuevosProductos = productos.filter(
            producto => producto.idProducto !== id
        );

        if (productos.length === nuevosProductos.length) {

            return false;

        }

        await guardarProductos(nuevosProductos);

        return true;

    }

}