import { Component, HostListener, inject, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  translate = inject(TranslationService);

  /**
   * Initializes the component.
   * Adds an event listener to the document to detect if the user clicks outside of the mobile menu.
   * If the user clicks outside of the mobile menu and the menu is open, the menu is closed.
   */
  ngOnInit(): void {
    document.addEventListener('click', (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu') as HTMLDivElement;
      const menuButton = document.querySelector(
        '.mobile-menu-toggler'
      ) as HTMLButtonElement;

      if (!menu || !menuButton) return;

      if (
        menu.getAttribute('data-mb-active') === 'true' &&
        !menu.contains(event.target as Node) &&
        !menuButton.contains(event.target as Node)
      ) {
        this.toggleMobileMenu();
      }
    });
  }

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

  toggleMobileMenu() {
    const mobileMenuElement = document.getElementById('mobile-menu');
    if (!mobileMenuElement) return;

    mobileMenuElement.classList.toggle('d_none');
    const isActive =
      mobileMenuElement.getAttribute('data-mb-active') === 'true';
    mobileMenuElement.setAttribute(
      'data-mb-active',
      isActive ? 'false' : 'true'
    );

    const hamburgerMenuElements = document.querySelectorAll('.hamburger-menu');
    if (!hamburgerMenuElements) return;

    hamburgerMenuElements.forEach((element) => {
      (element as HTMLSpanElement).style.borderColor = isActive
        ? ''
        : '#3dcfb6';
    });

    this.toggleBackgroundBlur(isActive);
  }

  /**
   * Toggles the background blur effect on the specified element.
   * @param isActive - A boolean indicating whether the blur effect should be disabled.
   * If true, the background brightness is set to normal. If false, the background brightness is reduced.
   */

  toggleBackgroundBlur(isActive: boolean) {
    const background = document.getElementById('hero') as HTMLElement;
    if (!background) return;

    background.style.filter = isActive ? 'brightness(1)' : 'brightness(0.5)';
  }
}
