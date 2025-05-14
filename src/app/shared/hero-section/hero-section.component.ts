import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  @Input() title: string = 't-co.re.';
  @Input() subTitle: string = 'Transdisciplinarity and Complexity Research';
  @Input() description: string = 'Excellence Chair funded by the AMIDEX Foundation of Aix-Marseille University';
  @Input() backgroundImage: string = '';
}