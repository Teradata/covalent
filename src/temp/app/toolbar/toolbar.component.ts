import { Component, Inject, Renderer2, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Dir } from '@angular/cdk/bidi';

import { getDirection, setDirection } from '../utilities/direction';
import { ChartThemeSelectorService } from '../utilities/theme';

import { getThemes } from '@covalent/echarts/base';

@Component({
  selector: 'td-toolbar',
  templateUrl: '././toolbar.component.html',
  styleUrls: ['././toolbar.component.scss'],
})
export class ToolbarComponent {

  @Output() dirEmitter: EventEmitter<'ltr' | 'rtl'> = new EventEmitter<'ltr' | 'rtl'>();
  updates: Object[] = [];

  dir: 'ltr' | 'rtl' = getDirection();

  themes: string[] = getThemes();
  selectedTheme: string = this.themes[0];
  
  constructor(private _renderer: Renderer2,
              private _dir: Dir,
              private _chartThemeSelectorService: ChartThemeSelectorService,
              @Inject(DOCUMENT) private _document: any) {
    this._dir.dir = this.dir;
    this._chartThemeSelectorService.select(this.selectedTheme);
  }

  changeDir(dir: 'ltr' | 'rtl'): void {
    this._renderer.setAttribute(this._document.querySelector('html'), 'dir', dir);
    this._dir.dir = dir;
    this.dirEmitter.emit(dir);
    setDirection(dir);
  }

  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  selectChartTheme(theme: string): void {
    this._chartThemeSelectorService.select(theme);
  }

}
