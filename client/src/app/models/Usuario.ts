import { AbstractControl } from "@angular/forms";

export interface Usuario{
    idUsuario ?: undefined;
    nombre ?: string;
    apeP ?: string;
    apeM ?: string;
    telefono ?: string;
    correo ?: string;
    password1 ?: string;
    password2 ?: string;
    created_at ?: Date;
}