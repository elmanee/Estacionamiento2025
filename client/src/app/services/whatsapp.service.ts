import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private apiUrl = 'http://localhost:3000/api/whatsapp/send-message';

  constructor(private http: HttpClient) {}

  sendMessage(phone: string, message: string) {
    return this.http.post(this.apiUrl, { phone, message });
  }
}
