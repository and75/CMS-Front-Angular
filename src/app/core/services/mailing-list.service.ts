// mailing-list.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MailingListService {
  private readonly apiUrl = 'https://api.brevo.com/v3/contacts';

  constructor(private http: HttpClient) {}

  subscribe(name: string, institution: string, email: string) {
    return this.http.post(
      this.apiUrl,
      {
        attributes: {
          NAME: name,
          INSTITUTION: institution,
        },
        email,
        listIds: [2],  // Inserisci l'ID della tua lista
        updateEnabled: true
      },
      {
        headers: {
          'api-key': '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',
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
