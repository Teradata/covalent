import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { TdDialogService } from '@covalent/core';

import { TRANSLATE_STORAGE_KEY } from '../../../utilities/translate';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngx-translate-demo',
  styleUrls: ['./ngx-translate.component.scss'],
  templateUrl: './ngx-translate.component.html',
})
export class NgxTranslateDemoComponent {

  selectedLanguage: string;
  valueCountForPlural: string;
  value: string;
  dateToFormat: Date = new Date();

  constructor(private _translateService: TranslateService,
              private _dialogService: TdDialogService) {
    this.selectedLanguage = this._translateService.currentLang;
  }

  languageChange(value: string): void {
    sessionStorage.setItem(TRANSLATE_STORAGE_KEY, value);
    location.reload();
  }

  openAlert(): void {
    this._translateService.get('DEMO_THREE.ALERT').subscribe((messages: any) => {
      this._dialogService.openAlert({
        title: messages.TITLE,
        message: messages.MESSAGE,
        closeButton: messages.CLOSE,
      });
    });
  }

}
