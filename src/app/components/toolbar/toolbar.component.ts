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
      description: 'Agnostic filtering with (inputChange) and [debounce] (local vs server side)',
      icon: 'label',
      route: '/components/chips',
      title: 'Chips feature',
    }, {
      description: 'object list and template support and new [td-chip-avatar] attribute',
      icon: 'label',
      route: '/components/chips',
      title: 'Chips feature',
    }, {
      description: 'new [chipRemoval] input',
      icon: 'label',
      route: '/components/chips',
      title: 'Chips feature',
    }, {
      description: 'new [color] input',
      icon: 'label',
      route: '/components/chips',
      title: 'Chips feature',
    }, {
      description: 'new [stacked] input',
      icon: 'label',
      route: '/components/chips',
      title: 'Chips feature',
    }, {
      description: 'new td-expansion-panel-group component',
      icon: 'open_with',
      route: '/components/expansion-panel',
      title: 'Expansion panel feature',
    }, {
      description: 'new [disableRipple] input',
      icon: 'open_with',
      route: '/components/expansion-panel',
      title: 'Expansion panel feature',
    }, {
      description: 'new [mode], [opened], [sidenavWidth] inputs for td-layout',
      icon: 'view_quilt',
      route: '/layouts',
      title: 'Layouts feature',
    }, {
      description: 'new [color] input for td-layout-footer',
      icon: 'view_quilt',
      route: '/layouts',
      title: 'Layouts feature',
    }, {
      description: 'animation when opening/closing',
      icon: 'info_outline',
      route: '/components/message',
      title: 'Message feature',
    }, {
      description: 'new [disableRipple] input',
      icon: 'view_list',
      route: '/components/steps',
      title: 'Stepper feature',
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
