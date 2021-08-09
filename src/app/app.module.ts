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
import { MatExpansionModule } from '@angular/material/expansion';

import { CovalentHighlightModule } from '../platform/highlight';
import { CovalentMarkdownModule } from '../platform/markdown';
import { CovalentDynamicFormsModule } from '../platform/dynamic-forms';

import { SidenavContentModule } from './components/shared/sidenav-content/sidenav-content.module';

import { GitHubService, InternalDocsService, SelectivePreloadingStrategyService } from './services';
import { getSelectedLanguage, createTranslateLoader } from './utilities/translate';
import { ContentContainerModule } from './components/content-container/content-container.module';
import { HomeComponent } from './components/home/home.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { CovalentLayoutModule } from '../platform/core/layout';
import { CovalentFileModule } from '../platform/core/file';
@NgModule({
  declarations: [DocsAppComponent, HomeComponent], // directives, components, and pipes owned by this NgModule
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
    MatExpansionModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    ToolbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    SidenavContentModule,
    ContentContainerModule,
    appRoutes,
    CovalentFileModule,
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
  bootstrap: [DocsAppComponent],
})
export class AppModule {}
