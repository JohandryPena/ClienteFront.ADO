export interface IGetPagination {
  regsitros: User[];
  totalRegistros: number;
}

export interface User {
  clienteId?: number
  persona: Persona
  contraseña: string
  estado?: boolean
  imagenBase64: string
}

export interface Persona {
  nombre: string
  genero: string
  edad: number | string
  tipoIdentificacion: number | string
  identificacion: number | string
  direccion: string
  telefono: string
}
