import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { IMdNavigatorItem, IMdNavigatorLabels } from '../md-navigator.component';

export interface IMdNavigatorWindowLabels extends IMdNavigatorLabels {
  title?: string;
  close?: string;
}
export const DEFAULT_MD_NAVIGATOR_WINDOW_LABELS: IMdNavigatorWindowLabels = {
  title: 'Help',
  close: 'Close',
};

@Component({
  selector: 'td-md-navigator-window',
  templateUrl: './md-navigator-window.component.html',
  styleUrls: ['./md-navigator-window.component.scss'],
})
export class MdNavigatorWindowComponent {
  @Input() items: IMdNavigatorItem[];
  @Input() labels: IMdNavigatorWindowLabels;
  @Input() toolbarColor: ThemePalette = 'primary';

  @Output() closed: EventEmitter<void> = new EventEmitter();

  get mdNavigatorLabels(): IMdNavigatorLabels {
    if (this.labels) {
      const { goHome, goBack, emptyState }: IMdNavigatorWindowLabels = this.labels;
      return {
        goHome,
        goBack,
        emptyState,
      };
    }
  }
  get titleLabel(): string {
    return (this.labels && this.labels.title) || DEFAULT_MD_NAVIGATOR_WINDOW_LABELS.title;
  }

  get closeLabel(): string {
    return (this.labels && this.labels.close) || DEFAULT_MD_NAVIGATOR_WINDOW_LABELS.close;
  }
}
