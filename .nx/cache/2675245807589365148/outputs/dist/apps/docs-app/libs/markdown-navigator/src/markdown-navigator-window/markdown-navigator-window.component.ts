import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  Type,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  IMarkdownNavigatorItem,
  IMarkdownNavigatorLabels,
  IMarkdownNavigatorCompareWith,
} from '../markdown-navigator.component';
import { ITdFlavoredMarkdownButtonClickEvent } from '@covalent/flavored-markdown';
import { ICopyCodeTooltips } from '@covalent/highlight';

export interface IMarkdownNavigatorWindowLabels
  extends IMarkdownNavigatorLabels {
  title?: string;
  close?: string;
  dock?: string;
  unDock?: string;
}
export const DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS: IMarkdownNavigatorWindowLabels =
  {
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
  @Input() items?: IMarkdownNavigatorItem[];
  @Input() labels?: IMarkdownNavigatorWindowLabels;
  @Input() toolbarColor: ThemePalette = 'primary';
  @Input() startAt?: IMarkdownNavigatorItem | IMarkdownNavigatorItem[];
  @Input() compareWith?: IMarkdownNavigatorCompareWith;
  @Input() docked? = false;
  @Input() copyCodeToClipboard? = false;
  @Input() copyCodeTooltips?: ICopyCodeTooltips = {};
  @Input() footer?: Type<any>;

  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() dockToggled: EventEmitter<boolean> = new EventEmitter();
  @Output() buttonClicked: EventEmitter<ITdFlavoredMarkdownButtonClickEvent> =
    new EventEmitter();
  @Output() itemSelected: EventEmitter<IMarkdownNavigatorItem> =
    new EventEmitter();

  get markdownNavigatorLabels(): IMarkdownNavigatorLabels | undefined {
    if (!this.labels) {
      return undefined;
    }

    const { goHome, goBack, emptyState }: IMarkdownNavigatorWindowLabels =
      this.labels;
    return {
      goHome,
      goBack,
      emptyState,
    };
  }
  get titleLabel(): string | undefined {
    return (
      (this.labels && this.labels.title) ||
      DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.title
    );
  }

  get closeLabel(): string | undefined {
    return (
      (this.labels && this.labels.close) ||
      DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.close
    );
  }

  get toggleDockedStateLabel(): string | undefined {
    if (this.docked) {
      return (
        (this.labels && this.labels.unDock) ||
        DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.unDock
      );
    } else {
      return (
        (this.labels && this.labels.dock) ||
        DEFAULT_MARKDOWN_NAVIGATOR_WINDOW_LABELS.dock
      );
    }
  }

  toggleDockedState(): void {
    this.dockToggled.emit(this.docked);
  }
}
