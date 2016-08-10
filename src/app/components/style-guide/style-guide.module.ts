import { NgModule } from '@angular/core';

import { JsonpModule } from '@angular/http';

import { styleGuideRoutes } from './style-guide.routes';

import { StyleGuideComponent } from './style-guide.component';
import { LogoComponent } from './logo';
import { ProductIconsComponent } from './product-icons';
import { TypographyComponent } from './typography';
import { IconographyComponent } from './iconography';
import { ColorsComponent } from './colors';
import { MaterialComponentsComponent } from './material-components';
import { CardsComponent } from './cards';
import { UtilityStylesComponent } from './utility-styles';

import { CovalentCoreModule } from '../../../platform/core';
import { CovalentFileModule } from '../../../platform/file-upload';
import { CovalentHighlightModule } from '../../../platform/highlight';
import { CovalentMarkdownModule } from '../../../platform/markdown';

@NgModule({
  declarations: [
    StyleGuideComponent,
    LogoComponent,
    ProductIconsComponent,
    TypographyComponent,
    IconographyComponent,
    ColorsComponent,
    MaterialComponentsComponent,
    CardsComponent,
    UtilityStylesComponent,
  ],
  imports: [
    JsonpModule,
    CovalentCoreModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    styleGuideRoutes,
  ],
})
export class StyleGuideModule {}