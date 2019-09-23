import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// register 'es' locale
registerLocaleData(localeEs);

import { DocsAppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { appRoutes, appRoutingProviders } from './app.routes';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {
  CovalentLayoutModule,
  CovalentExpansionPanelModule,
  CovalentNotificationsModule,
  CovalentMenuModule,
  CovalentMediaModule,
} from '../platform/core';
import { CovalentHighlightModule } from '../platform/highlight';
import { CovalentHttpModule } from '../platform/http';
import { CovalentMarkdownModule } from '../platform/markdown';
import { CovalentDynamicFormsModule } from '../platform/dynamic-forms';

import { ToolbarModule } from './components/toolbar/toolbar.module';

import { GitHubService, InternalDocsService, SelectivePreloadingStrategyService } from './services';
import { getSelectedLanguage, createTranslateLoader } from './utilities/translate';
import { CovalentSidesheetModule } from '@covalent/core/sidesheet';

@NgModule({
  declarations: [DocsAppComponent, HomeComponent, TemplatesComponent], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatTooltipModule,
    MatSnackBarModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    CovalentExpansionPanelModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentMediaModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentSidesheetModule,
    ToolbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    GitHubService,
    InternalDocsService,
    {
      // Configure LOCALE_ID depending on the language set in browser
      provide: LOCALE_ID,
      useFactory: getSelectedLanguage,
      deps: [TranslateService],
    },
    SelectivePreloadingStrategyService,
  ], // additional providers needed for this module
  entryComponents: [],
  bootstrap: [DocsAppComponent],
})
export class AppModule {}
