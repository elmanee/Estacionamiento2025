import { Component, HostBinding, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuario.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/Usuario';
import { Vehiculo } from 'src/app/models/Vehiculo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit{
  usuario: Usuario | null= {
    idUsuario: undefined,
    nombre: '',
    apeP: '',
    apeM: '',
    telefono: '',
    correo: '',
    password1: '',
    password2: '',
    created_at: new Date()
  };

  constructor(private authService: AuthService, private usuariosService: UsuariosService, private http: HttpClient) {}

  ngOnInit() {
    var datos: any = this.authService.getCurrentUser();
    console.log('Datos obtenidos:', datos); // Verifica qué se imprime

    if (Array.isArray(datos) && datos.length > 0 && Array.isArray(datos[0]) && datos[0].length > 0) {
      this.usuario = datos[0][0]; // Accede correctamente si la estructura es como se espera
    } else {
      console.warn("La estructura de datos no es la esperada:", datos);
    }
  }

  getAct(){
    this.usuariosService.getUsuarios().subscribe(
      res => {
        console.log(res),
        this.usuario = res as Usuario
      },
      rep => console.error
      );
  }

  editUser(id:string){
    console.log(id);
  }

  descargarHistorialPdf() {
    this.http.get('http://localhost:3000/api/pago/download-historial-pdf', {
        responseType: 'blob',
        headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
    })
    .subscribe({
        next: (response: Blob) => {
            const url = window.URL.createObjectURL(response);
            const a = document.createElement('a');
            a.href = url;
            a.download = `historial_${new Date().getTime()}.pdf`; // Cambia el nombre para evitar caché
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        },
        error: (error) => {
            console.error('Error descargando el PDF:', error);
        }
    });
}


}


