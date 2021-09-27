import { NivelEducacional } from './NivelEducacional';

// creamos los atributos de la clase Persona
export class Persona {
    public nombre = '';
    public apellido = '';
    public sede = '';
    public carrera = '';
    public nivelEducacional: NivelEducacional = new NivelEducacional(0, '');
    public fecNacimiento = '';
    public email: '';
}