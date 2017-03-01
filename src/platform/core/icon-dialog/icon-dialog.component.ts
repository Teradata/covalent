/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { IconService } from './services/icon.service';

@Component({
  selector: 'icon-dialog',
  templateUrl: './icon-dialog.component.html',
  styleUrls: ['./icon-dialog.component.scss'],
})
export class IconDialogComponent implements OnInit {

  icons: string[] = [];
  selectedIcon: string;

  constructor(private _iconService: IconService,
              private _dialogRef: MdDialogRef<IconDialogComponent>) {}

  ngOnInit(): void {
    this.icons = this._iconService.icons;
  }

  handleClick(selectedIcon: string): void {
    this.selectedIcon = selectedIcon;
    this._dialogRef.close(selectedIcon);
  }
}
