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
  dock?: string;
  unDock?: string;
}
export const DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS: IMarkdownNavigatorWindowLabels = {
  title: 'Help',
  close: 'Close',
  dock: 'Dock',
  unDock: 'Undock',
};

@Component({
  selector: 'td-markdown-navigator-window',
  templateUrl: './markdown-navigator-window.component.html',
  styleUrls: ['./markdown-navigator-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdMarkdownNavigatorWindowComponent {
  @Input() items: IMarkdownNavigatorItem[];
  @Input() labels: IMarkdownNavigatorWindowLabels;
  @Input() toolbarColor: ThemePalette = 'primary';
  @Input() startAt: IMarkdownNavigatorItem;
  @Input() compareWith: IMarkdownNavigatorCompareWith;
  toolbarHeight: number = 56;
  @Input() docked: boolean = false;

  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() dockToggled: EventEmitter<boolean> = new EventEmitter();

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

  get toggleDockedStateLabel(): string {
    if (this.docked) {
      return (this.labels && this.labels.unDock) || DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.unDock;
    } else {
      return (this.labels && this.labels.dock) || DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.dock;
    }
  }

  toggleDockedState(): void {
    this.dockToggled.emit(this.docked);
  }
}
