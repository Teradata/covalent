import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';

import { getSelectedLanguage } from './utilities/translate';
import { getDirection } from './utilities/direction';

@Component({
  selector: 'docs-covalent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DocsAppComponent {
  // Current date
  year: any = new Date().getFullYear();

  routes: object[] = [
    {
      icon: 'library_books',
      route: 'docs',
      title: 'Documentation',
    },
    {
      icon: 'picture_in_picture',
      route: 'components',
      title: 'Components & Addons',
    },
    {
      icon: 'show_chart',
      route: 'echarts',
      title: 'Echarts',
    },
    {
      icon: 'view_quilt',
      route: 'layouts',
      title: 'Layouts',
    },
    {
      icon: 'color_lens',
      route: 'style-guide',
      title: 'Style Guide',
    },
    {
      icon: 'extension',
      route: 'design-patterns',
      title: 'Design Patterns',
    },
    {
      icon: 'view_carousel',
      route: 'templates',
      title: 'Templates',
    },
  ];

  dir: string;

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    translateService: TranslateService,
  ) {
    // Set fallback language
    translateService.setDefaultLang('en');
    // Supported languages
    translateService.addLangs(['en', 'es']);

    // Get selected language and load it
    translateService.use(getSelectedLanguage(translateService));

    // Register svgs
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'covalent-stroke',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-stroke.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'covalent-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-outline.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'angular',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'angular-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular-outline.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'material-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-outline.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-ux.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'appcenter',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/appcenter.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'listener',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/listener.svg'),
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'querygrid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/querygrid.svg'),
    );

    // SVG Icons
    this._iconRegistry.addSvgIcon(
      'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'),
    );
    this._iconRegistry.addSvgIcon(
      'teradata-dark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-dark.svg'),
    );
    this._iconRegistry.addSvgIcon(
      'teradata-solid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-solid.svg'),
    );
    this._iconRegistry.addSvgIcon(
      'teradata-icon',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-icon.svg'),
    );

    this._iconRegistry.addSvgIcon(
      'appcenter',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/appcenter.svg'),
    );
    this._iconRegistry.addSvgIcon(
      'control-center',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/control-center.svg'),
    );
    this._iconRegistry.addSvgIcon(
      'querygrid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/querygrid.svg'),
    );
    this._iconRegistry.addSvgIcon(
      'listener',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/listener.svg'),
    );
    this._iconRegistry.addSvgIcon(
      'workload-analytics',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/workload-analytics.svg'),
    );
    this._iconRegistry.addSvgIcon('unity', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/unity.svg'));
    this._iconRegistry.addSvgIcon(
      'viewpoint',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/viewpoint.svg'),
    );

    // set direction
    this.dir = getDirection();
  }

  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }
}
