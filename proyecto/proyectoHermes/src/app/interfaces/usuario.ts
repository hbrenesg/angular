export interface Usuario {
    id: number,
    nombreUsuario: string,
    email: string,
    contrasena: string,
    telefono: number,
    administrador: boolean,
    estaLogueado: boolean
}
