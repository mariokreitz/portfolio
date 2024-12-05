import { Component, inject, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Terstimonial } from '../../../../../types/testimonials/testimonials';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [TranslateModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  translate = inject(TranslateService);
  @Input() testimonial: Terstimonial | null = null;
}
