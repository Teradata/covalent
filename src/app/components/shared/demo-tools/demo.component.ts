import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import sdk from '@stackblitz/sdk';
import { catchError, map } from 'rxjs/operators';
import { forkJoin, Observable, Subscriber, of } from 'rxjs';
import * as data from '../../../../../package.json';

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

@Component({
  selector: 'demo-component',
  styleUrls: ['./demo.component.scss'],
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  private readonly uniqueChaCha: string = 'Cha-234c8b6d-591e-4140-9c82-8c36a0709afb-Cha';
  private readonly uniqueYahYah: string = 'Yah-f3cc5d58-5956-446a-abee-a8fb70193768-Yah';
  @Input() demoId: string;
  @Input() demoTitle: string;
  @Input() hideStackBlitzDemo: boolean = false;
  viewCode: boolean = false;
  typescriptFile: string;
  htmlFile: string;
  stylesFile: string;
  dependencies: object = new Object();

  indexFile: string = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>ChaCha</title>
    <base href="/">
  </head>
  <body>
    <Cha-234c8b6d-591e-4140-9c82-8c36a0709afb-Cha></Cha-234c8b6d-591e-4140-9c82-8c36a0709afb-Cha> 
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
  import { Yah-f3cc5d58-5956-446a-abee-a8fb70193768-Yah } from './Cha-234c8b6d-591e-4140-9c82-8c36a0709afb-Cha.component';

  const routes: Routes = [
    {
      path: '',
      component: Yah-f3cc5d58-5956-446a-abee-a8fb70193768-Yah,
    }
  ];
  
  @NgModule({
    declarations: [
      Yah-f3cc5d58-5956-446a-abee-a8fb70193768-Yah
    ],
    imports: [
      BrowserModule,
      SharedModule,
      RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [Yah-f3cc5d58-5956-446a-abee-a8fb70193768-Yah]
  })
  export class AppModule { }
    `;

  constructor(private _http: HttpClient) {
    this.dependencies = data.dependencies;
    // has additional themes for respective demos to work
    this.dependencies['@covalent/core'] = '3.0.0-rc.2';
    this.dependencies['@covalent/dynamic-forms'] = '3.0.0-rc.2';

    this.dependencies['@covalent/markdown'] = '3.0.0-rc.2';
    this.dependencies['@covalent/flavored-markdown'] = '3.0.0-rc.2';
    this.dependencies['@covalent/markdown-navigator'] = '3.0.0-rc.2';
    this.dependencies['@covalent/code-editor'] = '3.0.0-rc.2';
    this.dependencies['@covalent/http'] = '3.0.0-rc.2';
    this.dependencies['@covalent/highlight'] = '3.0.0-rc.2';
    // TODO: doesn't appear stackblitz api support nightly dependencies - needs follow up for loading mask demo
    // this.dependencies['@covalent/experimental'] = "git+https://github.com/Teradata/covalent-experimental-nightly.git";
    // "@covalent/experimental": "git+https://github.com/Teradata/covalent-experimental-nightly.git",
    this.dependencies['@covalent/echarts'] = '3.0.0-rc.2';
    this.dependencies['@types/echarts'] = '*';
    this.dependencies['zrender'] = '4.3.0'; // needed for echarts

    this.dependencies['@td-vantage/ui-platform'] = '*';
  }

  // TODO: write wrapper around this and create "demo-component" that will consume it (show's demo/typescript/styles/html tab)
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
    })
      .pipe(
        map((responses: IDemoFiles) => {
          return {
            typescript: responses.typescript,
            html: responses.html,
            style: responses.style,
            sharedModule: responses.sharedModule,
            angularJson: responses.angularJson,
            themeScss: responses.themeScss,
            markdownThemeScss: responses.markdownThemeScss,
            flavoredMarkdownThemeScss: responses.flavoredMarkdownThemeScss,
            teradataThemeScss: responses.teradataThemeScss,
            polyfills: responses.polyfills,
          };
        }),
        catchError((error: Response) => {
          return new Observable<any>((subscriber: Subscriber<any>) => {
            try {
              subscriber.error(error);
            } catch (err) {
              subscriber.error(error);
            }
          });
        }),
      )
      .subscribe((demo: IDemoFiles) => {
        this.indexFile = this.indexFile.replace(new RegExp(this.uniqueChaCha, 'g'), this.demoId);
        const demoIdParts: string[] = this.demoId.split('-');
        const demoComponentName: string =
          demoIdParts.map((piece: string) => piece.charAt(0).toUpperCase() + piece.substr(1)).join('') + 'Component';
        this.appModuleFile = this.appModuleFile.replace(this.uniqueChaCha, this.demoId);
        this.appModuleFile = this.appModuleFile.replace(new RegExp(this.uniqueYahYah, 'g'), demoComponentName);

        // TODO: remove this after markdown has been update and pushed out with the respective import
        demo.markdownThemeScss = demo.markdownThemeScss.replace(
          "@import '../../../node_modules/@angular/material/theming';",
          "@import '~@angular/material/theming';",
        );

        const project: any = {
          files: {
            [`${this.demoId}.component.ts`]: demo.typescript,
            [`${this.demoId}.component.html`]: demo.html,
            [`${this.demoId}.component.scss`]: demo.style || '',
            [`index.html`]: this.indexFile,
            [`main.ts`]: this.mainFile,
            [`app.module.ts`]: this.appModuleFile,
            [`shared.module.ts`]: demo.sharedModule,
            [`angular.json`]: demo.angularJson,
            [`theme.scss`]: demo.themeScss,
            [`_teradata-branding.scss`]: demo.teradataThemeScss,
            [`_markdown-theme.scss`]: demo.markdownThemeScss,
            [`_flavored-markdown-theme.scss`]: demo.flavoredMarkdownThemeScss,
            [`polyfills.ts`]: demo.polyfills,
          },
          title: this.demoTitle || this.demoId,
          description: this.demoTitle || this.demoId,
          template: 'angular-cli',
          dependencies: data.dependencies,
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
    })
      .pipe(
        map((responses: { typescript: string; html: string; styles: string }) => {
          return { typescript: responses.typescript, html: responses.html, styles: responses.styles };
        }),
        catchError((error: Response) => {
          return new Observable<any>((subscriber: Subscriber<any>) => {
            try {
              subscriber.error(error);
            } catch (err) {
              subscriber.error(error);
            }
          });
        }),
      )
      .subscribe((demo: { typescript: string; html: string; styles: string }) => {
        this.typescriptFile = demo.typescript;
        this.htmlFile = demo.html;
        this.stylesFile = demo.styles;
        this.viewCode = !this.viewCode;
      });
  }
}
