import { Component, OnInit,HostBinding } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { MyValidations } from 'src/app/utils/my-validations';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciose-form',
  templateUrl: './iniciose-form.component.html',
  styleUrls: ['./iniciose-form.component.css']
})
export class InicioseFormComponent {
  @HostBinding('class') classes = 'row';
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
  constructor(private usuariosService : UsuariosService, private router: Router){}
  ngOnInit(){}
   
 newUsuario(){
  delete this.usuario.created_at;
   this.usuariosService.saveUsuario(this.usuario).subscribe(
   resp =>{console.log(resp)
    this.router.navigate(['/home/login']);},
   err => console.log(err)
 
   ) 

 }
 
}


