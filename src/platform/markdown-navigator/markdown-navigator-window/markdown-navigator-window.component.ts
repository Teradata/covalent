import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { IMarkdownNavigatorItem, IMarkdownNavigatorLabels } from '../markdown-navigator.component';

export interface IMarkdownNavigatorWindowLabels extends IMarkdownNavigatorLabels {
  title?: string;
  close?: string;
}
export const DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS: IMarkdownNavigatorWindowLabels = {
  title: 'Help',
  close: 'Close',
};

@Component({
  selector: 'td-markdown-navigator-window',
  templateUrl: './markdown-navigator-window.component.html',
  styleUrls: ['./markdown-navigator-window.component.scss'],
})
export class MarkdownNavigatorWindowComponent {
  @Input() items: IMarkdownNavigatorItem[];
  @Input() labels: IMarkdownNavigatorWindowLabels;
  @Input() toolbarColor: ThemePalette = 'primary';
  toolbarHeight: number = 56;

  @Output() closed: EventEmitter<void> = new EventEmitter();

  get markdownNavigatorLabels(): IMarkdownNavigatorLabels {
    if (this.labels) {
      const { goHome, goBack, emptyState }: IMarkdownNavigatorWindowLabels = this.labels;
      return {
        goHome,
        goBack,
        emptyState,
      };
    }
  }
  get titleLabel(): string {
    return (this.labels && this.labels.title) || DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.title;
  }

  get closeLabel(): string {
    return (this.labels && this.labels.close) || DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.close;
  }
}
