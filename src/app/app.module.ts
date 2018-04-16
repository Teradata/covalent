import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DocsAppComponent } from './app.component';

import { CovalentTextEditorModule } from '../platform/text-editor';

@NgModule({
  declarations: [
    DocsAppComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,

    CovalentTextEditorModule,
  ], // modules needed to run this module
  providers: [
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ DocsAppComponent ],
})
export class AppModule {}
