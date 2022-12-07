export class Cuenta {
_id?: number;
correo:string;
contraseña:string;
nombre:string;
apellido:string;
dni:string;
direccion:string;
tipoCliente:string;
telefono:number;
ruc:number;
constructor(correo:string,contraseña:string,nombre:string,apellido:string,dni:string,direccion:string,tipoCliente:string,telefono:number,ruc:number)
{
    this.correo = correo;
    this.contraseña = contraseña;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.direccion = direccion;
    this.tipoCliente = tipoCliente;
    this.telefono = telefono;
    this.ruc = ruc;
}
}
