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
    this.translate.setDefaultLang('de');
  }

  /**
   * Switches the language of the application.
   * @param language The language code to switch to.
   */
  public switchLanguage(language: string): void {
    this.translate.use(language);
  }
}
