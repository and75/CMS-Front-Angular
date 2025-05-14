// src/app/core/services/mailing-list.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MailingListService {
  private readonly apiUrl = 'https://api.brevo.com/v3/contacts';
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  subscribe(name: string, institution: string, email: string): Observable<any> {
    if (!this.isBrowser) {
      return of(null);
    }

    return this.http.post(
      this.apiUrl,
      {
        attributes: {
          NAME: name,
          INSTITUTION: institution,
        },
        email,
        listIds: [2],
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
