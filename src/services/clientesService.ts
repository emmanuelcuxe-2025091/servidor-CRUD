import { Cliente } from "../models/clientes";
import { leerClientes, guardarClientes } from "../persistence/clientesPersistence";

export class ClienteService {

    async listar(): Promise<Cliente[]> {

        return await leerClientes();

    }

    async buscar(id: number): Promise<Cliente | undefined> {

        const clientes = await leerClientes();

        return clientes.find(cliente => cliente.idCliente === id);

    }

    async agregar(cliente: Cliente): Promise<void> {

        const clientes = await leerClientes();

        clientes.push(cliente);

        await guardarClientes(clientes);

    }

    async actualizar(cliente: Cliente): Promise<boolean> {

        const clientes = await leerClientes();

        const indice = clientes.findIndex(
            c => c.idCliente === cliente.idCliente
        );

        if (indice === -1) {

            return false;

        }

        clientes[indice] = cliente;

        await guardarClientes(clientes);

        return true;

    }

    async eliminar(id: number): Promise<boolean> {

        const clientes = await leerClientes();

        const nuevosClientes = clientes.filter(
            cliente => cliente.idCliente !== id
        );

        if (clientes.length === nuevosClientes.length) {

            return false;

        }

        await guardarClientes(nuevosClientes);

        return true;

    }

}