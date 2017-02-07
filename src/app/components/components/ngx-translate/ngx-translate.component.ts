import { Component } from '@angular/core';

import { TranslateService } from 'ng2-translate';

import { TRANSLATE_STORAGE_KEY } from '../../../utilities/translate';

@Component({
  selector: 'ngx-translate-demo',
  styleUrls: ['./ngx-translate.component.scss'],
  templateUrl: './ngx-translate.component.html',
})
export class NgxTranslateDemoComponent {

  selectedLanguage: string;
  valueCountForPlural: number = 0;
  numberToFormat: number = 1000100.20;
  dateToFormat: Date = new Date();

  constructor(private translate: TranslateService) {
    this.selectedLanguage = translate.currentLang;
  }

  languageChange(value: string): void {
    sessionStorage.setItem(TRANSLATE_STORAGE_KEY, value);
    location.reload();
  }

}
