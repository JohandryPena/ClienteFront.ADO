import { urlApi } from "../config"
import { User } from "../interfaces";
import customFetch from "../utils/customFetch"

export const getClientes = async (request: Request) => {
  try {
    const url = new URL(request.url);
    return await customFetch(`${urlApi}/Clientes${url.search}`, {
      method: 'GET'
    })
  } catch (error) {
    return []
  }
}

export const postClientes = async (data: unknown) => {
  return await customFetch(`${urlApi}/Clientes`, {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

export const getClientesById = async (id: number): Promise<User | { mensaje: string }> => {
  return customFetch(`${urlApi}/Clientes/${id}`, { method: 'GET' })
}

export const putClientes = async (id: number, data: unknown) => {
  return await customFetch(`${urlApi}/Clientes/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  })
}

export const deleteClientesById = async (id: number) => {
  customFetch(`${urlApi}/Clientes/${id}`, { method: 'DELETE' })
}
