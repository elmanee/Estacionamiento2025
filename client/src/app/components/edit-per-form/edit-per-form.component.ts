import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuario.service';
import { ActivatedRoute,Router, Params } from '@angular/router';


@Component({
  selector: 'app-edit-per-form',
  templateUrl: './edit-per-form.component.html',
  styleUrls: ['./edit-per-form.component.css']
})
export class EditPerFormComponent {
  idVehiculo: number| undefined | string;
  usuario: Usuario= { 
    idUsuario: undefined,
   nombre: '',
   apeP: '',
   apeM: '',
   telefono: '',
   correo: '',
   password1: '',
   password2: '',
   created_at: new Date()
 
  }
    constructor(private usuarioService : UsuariosService, private router: Router, private activateRoute : ActivatedRoute){  
  }
    
    ngOnInit(): void{
      
      this.edit();
    }

    edit(): void{
      this.activateRoute.params.subscribe(
        e=>{
          let id=e['id'];
          if(id){
            this.usuario.idUsuario=id;
            this.usuarioService.getUsuario(id).subscribe(
              es=>this.usuario=es
              
            );
          }
        }
      );

    }

    editReserva(){
      this.usuarioService.updateUsuarios(this.usuario.idUsuario,this.usuario)
      .subscribe(
        res => { 
          console.log(res);
          alert("Reserva Actualizada");
          this.router.navigate(['home/reserva']);
        },
        err => console.error(err)
      );
    }

   
  }


