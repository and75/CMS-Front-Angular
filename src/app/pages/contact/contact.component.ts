import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { SeoService } from '../../core/services/seo.service';
@Component({
    selector: 'app-contact',
    standalone : true,
    imports: [
        NgIf,
        ReactiveFormsModule
    ],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  data$ = this.contactService.getData();
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  // Coordinates for the CGGG location
  readonly mapLocation = {
    lat: 43.516387,
    lng: 5.447157,
    address: 'Centre Gilles-Gaston Granger, 29 Avenue Robert Schuman, 13621 Aix-en-Provence'
  };

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder,
    seo:SeoService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  getGoogleMapsUrl(): string {
    const query = encodeURIComponent(this.mapLocation.address);
    return `https://www.google.com/maps/search/?api=1&query=Maison+de+la+recherche,+29+Av.+Robert+Schuman,+13100+Aix-en-Provence,+France
`;
  }

  getStaticMapUrl(): string {
    return `./assets/img/map.png`;
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = '';
      this.submitSuccess = false;

      try {
        await this.contactService.sendEmail(this.contactForm.value);
        this.submitSuccess = true;
        this.contactForm.reset();
      } catch (error) {
        this.submitError = 'Failed to send message. Please try again later.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}