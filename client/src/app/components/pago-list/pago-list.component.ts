import { Component, HostBinding } from '@angular/core';
import { PagosService } from 'src/app/services/pago.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Pagos } from 'src/app/models/Pagos';

@Component({
  selector: 'app-pago-list',
  templateUrl: './pago-list.component.html',
  styleUrls: ['./pago-list.component.css']
})
export class PagoListComponent {
  @HostBinding ('class')classes='row';
  pagos: any =[];

  constructor(private pagoService : PagosService, private router:Router){}



  ngOnInit(){ this.getPagos();

  }

  getPagos() {
    this.pagoService.getPago().subscribe(
      (resp: any) => {
        console.log('Respuesta completa:', resp);

        // Asegura que `this.pagos` no se duplique
        this.pagos = [];

        if (Array.isArray(resp) && resp.length > 0) {
          // Si `resp[0]` es otro array, tomamos solo el primero
          this.pagos = Array.isArray(resp[0]) ? resp[0] : resp;
        } else {
          console.error('La respuesta no tiene datos:', resp);
        }
      },
      err => console.error('Error al obtener pagos:', err)
    );
  }



  deletePago(IDPago: number) {
    console.log(IDPago);
    this.pagoService.deletePago(IDPago).subscribe(
      resp => {
        console.log(resp);
        this.getPagos(); // Refresca la lista después de eliminar
      },
      err => console.error(err)
    );
  }



}
