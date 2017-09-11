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
      description: 'Virtual scroll component',
      icon: 'format_line_spacing',
      route: '/components/virtual-scroll',
      title: 'New component',
    }, {
      description: 'Markdown text editor component',
      icon: 'keyboard',
      route: '/components/text-editor',
      title: 'New component',
    }, {
      description: 'Sticky headers, virtual scroll & configurable widths',
      icon: 'grid_on',
      route: '/components/data-table',
      title: 'Data table updates',
    }, {
      description: 'New form features & bugfixes',
      icon: 'format_align_center',
      route: '/components/dynamic-forms',
      title: 'Dynamic forms updates',
    }, {
      description: 'New pre-canned animations!',
      icon: 'theaters',
      route: '/components/animations',
      title: 'New utility',
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
}
