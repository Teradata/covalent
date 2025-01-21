import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TranslateModule,
  TranslateService,
  TranslateLoader,
} from '@ngx-translate/core';

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

import { TdHighlightComponent } from '@covalent/highlight';
import { TdMarkdownComponent } from '@covalent/markdown';
import { TdDynamicFormsComponent } from '@covalent/dynamic-forms';
import { TdLayoutComponent } from '@covalent/core/layout';
import { TdFileUploadComponent } from '@covalent/core/file';

import { SidenavContentModule } from './components/shared/sidenav-content/sidenav-content.module';

import {
  GitHubService,
  InternalDocsService,
  SelectivePreloadingStrategyService,
} from './services';
import {
  getSelectedLanguage,
  createTranslateLoader,
} from './utilities/translate';
import { ContentContainerModule } from './components/content-container/content-container.module';
import { HomeComponent } from './components/home/home.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';

@NgModule({
  declarations: [DocsAppComponent, HomeComponent], // additional providers needed for this module
  bootstrap: [DocsAppComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
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
    TdLayoutComponent,
    TdHighlightComponent,
    TdMarkdownComponent,
    TdDynamicFormsComponent,
    TdFileUploadComponent,
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
  ],
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
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
