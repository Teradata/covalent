/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { Component, ElementRef, Inject, Renderer2, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Dir } from '@angular/cdk/bidi';

import { getDirection, setDirection } from '../../utilities/direction';

@Component({
  selector: 'td-toolbar',
  templateUrl: '././toolbar.component.html',
  styleUrls: ['././toolbar.component.scss'],
})
export class ToolbarComponent {
  updates: object[] = [
    {
      route: '/components/markdown-navigator',
      icon: 'subject',
      description: 'Render and navigate markdown',
      title: 'Markdown Navigator',
    },
    {
      route: '/utilities/functions',
      icon: 'build',
      description: 'New helper functions for multiple situations',
      title: 'Functions',
    },
    {
      route: '/visualizations/echarts/pie',
      icon: 'pie_chart',
      description: 'Added pie type support',
      title: 'Pie Echarts',
    },
    {
      route: '/visualizations/echarts/map',
      icon: 'map',
      description: 'Added map type support',
      title: 'Map Echarts',
    },
    {
      route: '/visualizations/echarts/wordcloud',
      icon: 'cloud_queue',
      description: 'Added wordcloud type support',
      title: 'WordCloud Echarts',
    },
    {
      route: '/components/dialogs',
      icon: 'open_in_browser',
      description: 'Draggable dialog support',
      title: 'Dialogs',
    },
  ];

  dir: 'ltr' | 'rtl' = getDirection();

  constructor(private _renderer: Renderer2, private _dir: Dir, @Inject(DOCUMENT) private _document: any) {
    this._dir.dir = this.dir;
  }

  changeDir(dir: 'ltr' | 'rtl'): void {
    this._renderer.setAttribute(this._document.querySelector('html'), 'dir', dir);
    this._dir.dir = dir;
    setDirection(dir);
  }

  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }
}
