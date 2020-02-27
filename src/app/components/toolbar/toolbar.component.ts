/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { Component, ElementRef, Inject, Renderer2, Output, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Dir } from '@angular/cdk/bidi';

import { getDirection, setDirection } from '../../utilities/direction';

import { VersionService } from './versions.service';

@Component({
  selector: 'td-toolbar',
  templateUrl: '././toolbar.component.html',
  styleUrls: ['././toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  dir: 'ltr' | 'rtl' = getDirection();

  versions: string[] = [];

  constructor(
    private _renderer: Renderer2,
    private _versionService: VersionService,
    private _dir: Dir,
    @Inject(DOCUMENT) private _document: any,
  ) {
    this._dir.dir = this.dir;
  }

  async ngOnInit(): Promise<void> {
    this.versions = await this._versionService.getVersions().toPromise();
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
