import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-imprint',
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  translate = inject(TranslationService);
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
