import { AbstractControl } from "@angular/forms";
import { UsuariosService } from "../services/usuario.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs"; 

export class MyValidations{
    static validateCorreo(usuarioService: UsuariosService) {
        return (control: AbstractControl) => {
          const value = control.value;
          return usuarioService.checkCorreo(value).pipe(
            map((response) => {
              return response.isCorreoAvailable ? null : { notAvailable: true };
            })
        );
    };

}
}