/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { Component, Renderer2, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Dir } from '@angular/cdk/bidi';

import { getDirection, setDirection } from '../../utilities/direction';

import { GitHubService } from '../../services/github.service';

@Component({
  standalone: false,
  selector: 'td-toolbar',
  templateUrl: '././toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
  private _renderer = inject(Renderer2);
  private _githubService = inject(GitHubService);
  private _dir = inject(Dir);
  private _document = inject(DOCUMENT);

  dir: 'ltr' | 'rtl' = getDirection();

  versions?: string[] = [];

  get version(): string {
    return location.pathname.split('/')[2] || 'LOCAL';
  }

  constructor() {
    const localTheme = localStorage.getItem('theme');

    this._dir.dir = this.dir;

    // Set active theme from user dark theme preference if not set locally
    this.activeTheme =
      localTheme ??
      (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'theme-dark'
        : 'theme-light');
  }

  async ngOnInit(): Promise<void> {
    this.versions = await this._githubService
      .getVersionDirectories()
      .toPromise();
  }

  changeDir(dir: 'ltr' | 'rtl'): void {
    this._renderer.setAttribute(
      this._document.querySelector('html'),
      'dir',
      dir,
    );
    this._dir.dir = dir;
    setDirection(dir);
  }

  get activeTheme(): string | null {
    return localStorage.getItem('theme');
  }
  set activeTheme(activeTheme: string) {
    document.querySelector('body')?.classList.remove('theme-dark');
    document.querySelector('body')?.classList.remove('theme-light');

    localStorage.setItem('theme', activeTheme);
    document.querySelector('body')?.classList.add(activeTheme);
  }

  theme(theme: string): void {
    this.activeTheme = theme;
  }
}
