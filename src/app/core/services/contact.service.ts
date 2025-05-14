import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface ContactData {
  title: string;
  content: string;
}

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  private readonly apiUrl = 'https://api.brevo.com/v3/smtp/email';
  private readonly apiKey = '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'; // ⚠️ ATTENZIONE: meglio spostarla in un backend per sicurezza

  getData(): Observable<ContactData> {
    return of({
      title: 'Contact Us',
      content: 'Get in touch with us for any inquiries or support.'
    });
  }

  async sendEmail(formData: { name: string; email: string; subject: string; message: string }): Promise<void> {
    const headers = new HttpHeaders({
      'api-key': this.apiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    const body = {
      sender: {
        name: formData.name,
        email: formData.email
      },
      to: [
        {
          email: 'andreaporcella@email.com', // ← Cambia con l'indirizzo del destinatario
          name: 'Andrea Porcella' // ← Cambia con il nome del destinatario
        }
      ],
      subject: formData.subject,
      htmlContent: `<p><strong>Da:</strong> ${formData.name} (${formData.email})</p>
                    <p><strong>Messaggio:</strong></p>
                    <p>${formData.message}</p>`
    };

    // Usa lastValueFrom perché `HttpClient` ritorna un Observable, ma tu usi `await` nel componente
    await lastValueFrom(this.http.post(this.apiUrl, body, { headers }));
  }

}