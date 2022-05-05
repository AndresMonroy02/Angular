export class Alumno {
    _id?: number;
    documento: number;
    nombre: string;
    apellido: string;
    edad: number;

    constructor(documento: number, nombre: string, apellido: string, edad: number) {
        this.documento = documento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
