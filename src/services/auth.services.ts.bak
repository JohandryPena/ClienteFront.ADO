import { urlApi } from "../config"
import customFetch from "../utils/customFetch"

export const postSignup = async (data: unknown) => {
  return await customFetch(`${urlApi}/Seccion/Login`, {
    method: 'POST',
    body: JSON.stringify(data)
  }, true)
}

export const getClienteLoagueado = async (token: string) => {
  return await customFetch(`${urlApi}/Clientes/logueado`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }, true)
}