import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { IHelpItem, IHelpComponentLabels } from '../help.component';

export interface IHelpWindowComponentLabels extends IHelpComponentLabels {
  help?: string;
  close?: string;
}
export const DEFAULT_HELP_WINDOW_COMP_LABELS: IHelpWindowComponentLabels = {
  help: 'Help',
  close: 'Close',
};

@Component({
  selector: 'td-help-window',
  templateUrl: './help-window.component.html',
  styleUrls: ['./help-window.component.scss'],
})
export class HelpWindowComponent {
  @Input() items: IHelpItem[];
  @Input() labels: IHelpWindowComponentLabels;
  @Input() toolbarColor: ThemePalette = 'primary';

  @Output() closed: EventEmitter<void> = new EventEmitter();

  get helpComponentLabels(): IHelpComponentLabels {
    if (this.labels) {
      const { goHome, goBack, emptyState }: IHelpWindowComponentLabels = this.labels;
      return {
        goHome,
        goBack,
        emptyState,
      };
    }
  }
  get helpLabel(): string {
    return (this.labels && this.labels.help) || DEFAULT_HELP_WINDOW_COMP_LABELS.help;
  }

  get closeLabel(): string {
    return (this.labels && this.labels.close) || DEFAULT_HELP_WINDOW_COMP_LABELS.close;
  }
}
