import { HttpClient } from '@angular/common/http';

import { TranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const TRANSLATE_STORAGE_KEY: string = 'ngx-translate-lang';

/**
 * Utility method to get selected language from sessionStorage or browser
 */
export function getSelectedLanguage(translateService: TranslateService): string {
  let storedLanguage: string = sessionStorage.getItem(TRANSLATE_STORAGE_KEY);
  // Check if the lenguage has been stored else if the language wasnt stored, then use browser default if supported
  if (storedLanguage && translateService.getLangs().indexOf(storedLanguage) > -1) {
    return storedLanguage;
  } else if (translateService.getLangs().indexOf(translateService.getBrowserLang()) > -1) {
    return translateService.getBrowserLang();
  }
  // If everything fails, then use default lang
  return translateService.getDefaultLang();
}

/**
 * Crate custom TranslateLoader since we have a diff dir structure for our json files
 */
export function createTranslateLoader(httpClient: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}
