import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent {
  isOpen = false;
  phone: string = "521234567890"; // Número de WhatsApp predefinido
  message: string = '';

  constructor(private http: HttpClient) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const body = { phone: this.phone, message: this.message };
    this.http.post('http://localhost:3000/api/whatsapp/send-message', body)
      .subscribe(response => {
        alert('Mensaje enviado');
        this.isOpen = false;
      }, error => {
        alert('Error al enviar mensaje');
      });
  }
}
