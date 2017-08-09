/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { Component, ElementRef, Inject, Renderer2, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Dir } from '@angular/cdk';

import { getDirection, setDirection } from '../../utilities/direction';

@Component({
  selector: 'td-toolbar',
  templateUrl: '././toolbar.component.html',
  styleUrls: ['././toolbar.component.scss'],
})
export class ToolbarComponent {
  updates: Object[] = [{
      description: '[readOnly] deprecation in favor of [disabled] input',
      icon: 'label',
      route: '/components/chips',
      title: 'Chips feature',
    }, {
      description: 'Layout directives and new demos',
      icon: 'view_quilt',
      route: '/layouts',
      title: 'Layouts feature',
    }, {
      description: '[compareWith] input',
      icon: 'grid_on',
      route: '/components/data-table',
      title: 'Data table feature',
    }, {
      description: 'introducing covalent/code-editor',
      icon: 'featured_play_list',
      route: '/components/code-editor',
      title: 'New component',
    }, {
      description: 'introducing covalent/text-editor',
      icon: 'vertical_align_bottom',
      route: '/components/text-editor',
      title: 'New component',
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
