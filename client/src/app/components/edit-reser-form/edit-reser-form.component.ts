import { Component, HostBinding,OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/Vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-reser-form',
  templateUrl: './edit-reser-form.component.html',
  styleUrls: ['./edit-reser-form.component.css']
})
export class EditReserFormComponent {
  idVehiculo: number| undefined | string;
  tempIdVehiculo: number | undefined;
    @HostBinding('class') classes = 'row';
    vehiculo: Vehiculo= {
    idVehiculo: undefined,
     matricula: '',
     nombreDue: '',
     modelo: '',
     color: '',
     espacio: '',
     created_at: new Date()

    }
    constructor(private vehiculosService : VehiculosService, private router: Router, private activateRoute : ActivatedRoute){
  }

    ngOnInit(): void{

      this.edit();
    }

    edit(): void{
      this.activateRoute.params.subscribe(
        e=>{
          let id=e['id'];
          if(id){
            this.vehiculo.idVehiculo=id;
            this.vehiculosService.getReserva(id).subscribe(
              es=>this.vehiculo=es

            );
          }
        }
      );

    }

   editReserva(){
    this.vehiculosService.updateVehiculos(this.vehiculo.matricula,this.vehiculo)
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
