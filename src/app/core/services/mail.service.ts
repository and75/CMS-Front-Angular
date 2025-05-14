import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrevoEmailService {

  private apiUrl = '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';
  private apiKey = 'LA_TUA_API_KEY';

  constructor(private http: HttpClient) {}

  sendEmail(formData: any) {

    const headers = new HttpHeaders({
      'api-key': this.apiKey,
      'Content-Type': 'application/json',
    });

    const body = {
      sender: { name: 'Contact from Tco-re. website', email: 'tua@email.com' },
      to: [{ email: 'destinatario@email.com', name: 'Destinatario' }],
      subject: formData.subject,
      htmlContent: `<p>${formData.message}</p>`,
    };

    return this.http.post(this.apiUrl, body, { headers });

  }
}
