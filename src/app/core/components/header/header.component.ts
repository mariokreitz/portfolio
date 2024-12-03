import { Component, HostListener, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

/**
 * HeaderComponent is a component that renders the header section of the application.
 * It contains the logo and a language switcher.
 *
 * @example
 * <app-header></app-header>
 */
export class HeaderComponent {
  translate = inject(TranslationService);

  @HostListener('change', ['$event.target'])
  /**
   * Handles the change event of the language switcher input element.
   * @param inputElement The HTMLInputElement that triggered this event.
   * Switches the language of the application based on whether the input element is checked or not.
   * When the input element is checked, the language is switched to German.
   * When the input element is not checked, the language is switched to English.
   */
  onInputChange(inputElement: HTMLInputElement): void {
    const isChecked = inputElement.checked as boolean;

    if (!isChecked) this.translate.switchLanguage('en');
    else this.translate.switchLanguage('de');
  }
}
