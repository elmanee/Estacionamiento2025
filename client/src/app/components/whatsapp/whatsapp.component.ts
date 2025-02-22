import { Component } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent {
  phone: string = '';
  message: string = '';

  constructor(private whatsappService: WhatsappService) {}

  sendMessage() {
    this.whatsappService.sendMessage(this.phone, this.message)
      .subscribe(response => {
        console.log('Mensaje enviado:', response);
      }, error => {
        console.error('Error al enviar mensaje:', error);
      });
  }
}
