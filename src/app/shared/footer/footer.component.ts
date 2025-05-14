import { Component } from '@angular/core';
import { MailingListComponent } from '../mailing-list/mailing-list.component';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [MailingListComponent],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}