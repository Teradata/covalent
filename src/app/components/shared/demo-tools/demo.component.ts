import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import sdk from '@stackblitz/sdk';
import { forkJoin, Observable, Subscriber, of } from 'rxjs';
import * as packageJson from '../../../../../package.json';
import { ChangeDetectorRef } from '@angular/core';

interface IDemoFiles {
  typescript: string;
  html: string;
  style: string;
  sharedModule: string;
  angularJson: string;
  themeScss: string;
  markdownThemeScss: string;
  flavoredMarkdownThemeScss: string;
  teradataThemeScss: string;
  polyfills: string;
}

interface IStackBlitzInfo {
  files: {};
  title: string;
  description: string;
  template: string;
  dependencies: {};
}

@Component({
  selector: 'demo-component',
  styleUrls: ['./demo.component.scss'],
  templateUrl: './demo.component.html',
})
export class DemoComponent implements AfterViewInit {
  private readonly uniqueFileNamePlaceholder: string = 'uniqueFileNamePlaceholder-234c8b6d-591e-4140-9c82-8c36a0709afb';
  private readonly uniqueComponentNamePlaceholder: string =
    'uniqueComponentNamePlaceholder-f3cc5d58-5956-446a-abee-a8fb70193768';
  @ViewChild('content') private content: ElementRef;
  demoId: string;
  @Input() demoTitle: string;
  @Input() hideStackBlitzDemo: boolean = false;
  viewCode: boolean = false;
  typescriptFile: string;
  htmlFile: string;
  stylesFile: string;
  dependencies: object = {};
  version: string = packageJson.version;

  indexFile: string = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>ChaCha</title>
    <base href="/">
  </head>
  <body>
    <uniqueFileNamePlaceholder-234c8b6d-591e-4140-9c82-8c36a0709afb></uniqueFileNamePlaceholder-234c8b6d-591e-4140-9c82-8c36a0709afb> 
  </body>
  </html>
    `;

  mainFile: string = `
  import 'zone.js';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  
  import { AppModule } from './app.module';
  
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
    `;

  appModuleFile: string = `
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';

  import { SharedModule } from './shared.module';
  import { uniqueComponentNamePlaceholder-f3cc5d58-5956-446a-abee-a8fb70193768 } from './app/uniqueFileNamePlaceholder-234c8b6d-591e-4140-9c82-8c36a0709afb.component';

  const routes: Routes = [
    {
      path: '',
      component: uniqueComponentNamePlaceholder-f3cc5d58-5956-446a-abee-a8fb70193768,
    }
  ];
  
  @NgModule({
    declarations: [
      uniqueComponentNamePlaceholder-f3cc5d58-5956-446a-abee-a8fb70193768
    ],
    imports: [
      BrowserModule,
      SharedModule,
      RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [uniqueComponentNamePlaceholder-f3cc5d58-5956-446a-abee-a8fb70193768]
  })
  export class AppModule { }
    `;

  constructor(private _http: HttpClient, private _cdr: ChangeDetectorRef) {
    this.dependencies = packageJson.dependencies;
    // has additional themes for respective demos to work
    this.dependencies['@covalent/core'] = this.version;
    this.dependencies['@covalent/dynamic-forms'] = this.version;

    this.dependencies['@covalent/markdown'] = this.version;
    this.dependencies['@covalent/flavored-markdown'] = this.version;
    this.dependencies['@covalent/markdown-navigator'] = this.version;
    this.dependencies['@covalent/code-editor'] = this.version;
    this.dependencies['@covalent/http'] = this.version;
    this.dependencies['@covalent/highlight'] = this.version;
    // TODO: doesn't appear stackblitz api support nightly dependencies - needs follow up for loading mask demo
    // this.dependencies['@covalent/experimental'] = "git+https://github.com/Teradata/covalent-experimental-nightly.git";
    // "@covalent/experimental": "git+https://github.com/Teradata/covalent-experimental-nightly.git",
    this.dependencies['@covalent/echarts'] = this.version;
    this.dependencies['@types/echarts'] = '*';
    this.dependencies['zrender'] = '4.3.0'; // needed for echarts

    this.dependencies['@td-vantage/ui-platform'] = '*';
  }

  ngAfterViewInit(): void {
    this.demoId = this.content.nativeElement.firstChild.nodeName.toLowerCase();
    this._cdr.detectChanges();
  }

  async openStackblitzDemo(): Promise<void> {
    const demoMarker: number = this.demoId.indexOf('-demo-');
    const demoFolderName: string = this.demoId.slice(0, demoMarker);

    forkJoin({
      typescript: this._http.get(`assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.ts`, {
        responseType: 'text',
      }),
      html: this._http.get(`assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.html`, {
        responseType: 'text',
      }),
      style: this._http.get(`assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.scss`, {
        responseType: 'text',
      }),
      sharedModule: this._http.get(`assets/demos/shared.module.ts`, { responseType: 'text' }),
      angularJson: this._http.get(`assets/demos/angular.json`, { responseType: 'text' }),
      themeScss: this._http.get(`assets/demos/theme.scss`, { responseType: 'text' }),
      markdownThemeScss: this._http.get(`platform/markdown/_markdown-theme.scss`, { responseType: 'text' }),
      flavoredMarkdownThemeScss: this._http.get(`platform/flavored-markdown/_flavored-markdown-theme.scss`, {
        responseType: 'text',
      }),
      teradataThemeScss: this._http.get(`assets/demos/_teradata-branding.scss`, { responseType: 'text' }),
      polyfills: this._http.get(`assets/demos/polyfills.ts`, { responseType: 'text' }),
    }).subscribe((demo: IDemoFiles) => {
      this.indexFile = this.indexFile.replace(new RegExp(this.uniqueFileNamePlaceholder, 'g'), this.demoId);
      const demoIdParts: string[] = this.demoId.split('-');
      const demoComponentName: string =
        demoIdParts.map((piece: string) => piece.charAt(0).toUpperCase() + piece.substr(1)).join('') + 'Component';
      this.appModuleFile = this.appModuleFile.replace(this.uniqueFileNamePlaceholder, this.demoId);
      this.appModuleFile = this.appModuleFile.replace(
        new RegExp(this.uniqueComponentNamePlaceholder, 'g'),
        demoComponentName,
      );

      // TODO: remove this after markdown has been update and pushed out with the respective import
      demo.markdownThemeScss = demo.markdownThemeScss.replace(
        "@import '../../../node_modules/@angular/material/theming';",
        "@import '~@angular/material/theming';",
      );

      const project: IStackBlitzInfo = {
        files: {
          [`src/app/${this.demoId}.component.ts`]: demo.typescript,
          [`src/app/${this.demoId}.component.html`]: demo.html,
          [`src/app/${this.demoId}.component.scss`]: demo.style || '',
          [`src/index.html`]: this.indexFile,
          [`src/main.ts`]: this.mainFile,
          [`src/app.module.ts`]: this.appModuleFile,
          [`src/shared.module.ts`]: demo.sharedModule,
          [`angular.json`]: demo.angularJson,
          [`src/theme/theme.scss`]: demo.themeScss,
          [`src/theme/_teradata-branding.scss`]: demo.teradataThemeScss,
          [`src/theme/_markdown-theme.scss`]: demo.markdownThemeScss,
          [`src/theme/_flavored-markdown-theme.scss`]: demo.flavoredMarkdownThemeScss,
          [`src/polyfills.ts`]: demo.polyfills,
        },
        title: this.demoTitle || this.demoId,
        description: this.demoTitle || this.demoId,
        template: 'angular-cli',
        dependencies: packageJson.dependencies,
      };

      // Method to open project in new window
      sdk.openProject(project);
    });
  }

  toggleCodeView(): void {
    const demoMarker: number = this.demoId.indexOf('-demo-');
    const demoFolderName: string = this.demoId.slice(0, demoMarker);
    forkJoin({
      typescript: this._http.get(`assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.ts`, {
        responseType: 'text',
      }),
      html: this._http.get(`assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.html`, {
        responseType: 'text',
      }),
      styles: this._http.get(`assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.scss`, {
        responseType: 'text',
      }),
    }).subscribe((demo: { typescript: string; html: string; styles: string }) => {
      this.typescriptFile = demo.typescript;
      this.htmlFile = demo.html;
      this.stylesFile = demo.styles;
      this.viewCode = !this.viewCode;
    });
  }
}
