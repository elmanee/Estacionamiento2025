import { Component, OnInit,HostBinding } from '@angular/core';
import { Vehiculo } from 'src/app/models/Vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { Router, Navigation } from '@angular/router';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaFormComponent {
  @HostBinding('class') classes = 'row';
  vehiculo: Vehiculo= { 
   matricula: '',
   nombreDue: '',
   modelo: '',
   color: '',
   espacio: '',
   created_at: new Date()
 
  }
  constructor(private vehiculosService : VehiculosService, private router:Router){}
  ngOInit(){}
   
 newReserva(){
   this.vehiculosService.saveVehiculos(this.vehiculo).subscribe(
    resp => {
      console.log(resp);
      this.router.navigate(['home/reserva']);
    },
    err => console.log(err)
  );
}
 
}
