import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-privat-policy',
  imports: [],
  templateUrl: './privat-policy.component.html',
  styleUrl: './privat-policy.component.scss',
})
export class PrivatPolicyComponent {
  translate = inject(TranslationService);
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
