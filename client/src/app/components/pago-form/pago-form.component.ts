import { Component,HostBinding } from '@angular/core';
import { Pagos } from 'src/app/models/Pagos';
import { PagosService } from 'src/app/services/pago.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-form',
  templateUrl: './pago-form.component.html',
  styleUrls: ['./pago-form.component.css']
})
export class PagoFormComponent {
  @HostBinding('class') classes = 'row';
  pagos: Pagos= { 
   concepto: '',
   monto: 0,
   created_at: new Date(),
   Estatus:''
 
  }
  constructor(private pagosService : PagosService,private router:Router){}
  ngOInit(){}
   
 newPago(){
   this.pagosService.savePago(this.pagos).subscribe(
      resp => {
         console.log(resp);
         this.router.navigate(['home/pagoTabla']);
       },
       err => console.log(err)
     );
   }

}
