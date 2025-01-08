import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * TranslationService is responsible for managing language translations within the application.
 * It leverages the TranslateService to switch languages and handle translation operations.
 */
@Injectable({
  providedIn: 'root',
})

/**
 * Provides functionality for translating the application.
 * It uses the TranslateService to do so.
 */
export class TranslationService {
  /**
   * Creates an instance of the TranslationService.
   * @param translate The TranslateService to use for translating the application.
   * Sets the default language to 'de' during construction.
   */
  constructor(private translate: TranslateService) {
    const language = this.getPreferredLanguage();
    this.translate.setDefaultLang(language);
    this.translate.currentLang = language;
  }

  /**
   * Switches the language of the application.
   * @param language The language code to switch to.
   */
  public switchLanguage(language: string): void {
    this.translate.use(language);
    this.setPreferredLanguage(language);
  }

  /**
   * Returns the current language of the application.
   * @returns The current language code.
   */
  public getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  /**
   * Sets the preferred language in the local storage.
   * @param language The language to set as preferred.
   */
  private setPreferredLanguage(language: string): void {
    localStorage.setItem('preferredLanguage', language);
  }

  /**
   * Loads the preferred language from the local storage.
   * @returns The preferred language code.
   */
  private getPreferredLanguage(): string {
    return localStorage.getItem('preferredLanguage') || 'en';
  }
}
