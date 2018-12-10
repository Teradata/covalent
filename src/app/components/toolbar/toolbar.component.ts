/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { Component, ElementRef, Inject, Renderer2, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Dir } from '@angular/cdk/bidi';

import { getDirection, setDirection } from '../../utilities/direction';

@Component({
  selector: 'td-toolbar',
  templateUrl: '././toolbar.component.html',
  styleUrls: ['././toolbar.component.scss'],
})
export class ToolbarComponent {
  updates: Object[] = [{
      description: 'initial release!',
      icon: 'format_line_spacing',
      route: '/components/nav-steps',
      title: 'Stepper (Navigational)',
    }, {
      description: '[multi] input added',
      icon: 'open_with',
      route: '/components/expansion-panel',
      title: 'Expansion Panels',
    }, {
      description: 'HttpClient usage and http decorators',
      icon: 'http',
      route: '/components/http',
      title: 'Http',
    },
  ];

  dir: 'ltr' | 'rtl' = getDirection();

  constructor(private _renderer: Renderer2,
              private _dir: Dir,
              @Inject(DOCUMENT) private _document: any) {
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
