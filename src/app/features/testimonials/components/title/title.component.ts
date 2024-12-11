import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  imports: [TranslateModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  /**
   * Testimonials title component.
   *
   * This component displays the title of the testimonials page.
   */
  translate = inject(TranslateService);
}
