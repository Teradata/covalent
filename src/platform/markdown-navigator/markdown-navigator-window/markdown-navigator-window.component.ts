import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  IMarkdownNavigatorItem,
  IMarkdownNavigatorLabels,
  IMarkdownNavigatorCompareWith,
} from '../markdown-navigator.component';

export interface IMarkdownNavigatorWindowLabels extends IMarkdownNavigatorLabels {
  title?: string;
  close?: string;
  minimize?: string;
  maximize?: string;
}
export const DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS: IMarkdownNavigatorWindowLabels = {
  title: 'Help',
  close: 'Close',
  minimize: 'Minimize',
  maximize: 'Maximize',
};

@Component({
  selector: 'td-markdown-navigator-window',
  templateUrl: './markdown-navigator-window.component.html',
  styleUrls: ['./markdown-navigator-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownNavigatorWindowComponent {
  @Input() items: IMarkdownNavigatorItem[];
  @Input() labels: IMarkdownNavigatorWindowLabels;
  @Input() toolbarColor: ThemePalette = 'primary';
  @Input() startAt: IMarkdownNavigatorItem;
  @Input() compareWith: IMarkdownNavigatorCompareWith;
  toolbarHeight: number = 56;
  @Input() isMinimized: boolean = false;

  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() minimized: EventEmitter<void> = new EventEmitter();
  @Output() maximized: EventEmitter<void> = new EventEmitter();

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

  get toggleMinimizeLabel(): string {
    if (this.isMinimized) {
      return (this.labels && this.labels.maximize) || DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.maximize;
    } else {
      return (this.labels && this.labels.minimize) || DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.minimize;
    }
  }

  toggleMinimize(): void {
    this.isMinimized ? this.maximized.emit() : this.minimized.emit();
  }
}
