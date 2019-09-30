import { Component, Output, EventEmitter, Input } from '@angular/core';
import {
  IHelpMenuDataItem,
  IHelpWindowComponentLabels,
  IHelpComponentLabels,
  DEFAULT_HELP_WINDOW_COMP_LABELS,
} from '../help.utils';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'td-help-window',
  templateUrl: './help-window.component.html',
  styleUrls: ['./help-window.component.scss'],
})
export class HelpWindowComponent {
  @Input() items: IHelpMenuDataItem[];
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
