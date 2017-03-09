import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

import { getSelectedLanguage } from './utilities/translate';

@Component({
  selector: 'docs-covalent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DocsAppComponent {

  routes: Object[] = [{
      icon: 'home',
      route: '.',
      title: 'Home',
    }, {
      icon: 'library_books',
      route: 'docs',
      title: 'Documentation',
    }, {
      icon: 'color_lens',
      route: 'style-guide',
      title: 'Style Guide',
    }, {
      icon: 'view_quilt',
      route: 'layouts',
      title: 'Layouts',
    }, {
      icon: 'picture_in_picture',
      route: 'components',
      title: 'Components & Addons',
    },
  ];

  constructor(private _iconRegistry: MdIconRegistry,
              private _domSanitizer: DomSanitizer,
              translateService: TranslateService) {
    // Set fallback language
    translateService.setDefaultLang('en');
    // Supported languages
    translateService.addLangs(['en', 'es']);

    // Get selected language and load it
    translateService.use(getSelectedLanguage(translateService));

    // Register svgs
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/teradata.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/github.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'appcenter',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/appcenter.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'listener',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/listener.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'querygrid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/querygrid.svg'));
  }
}
