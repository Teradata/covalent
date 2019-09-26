import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IHelpMenuDataItem, IHelpWindowComponentLabels, IHelpComponentLabels } from '../help.utils';
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

  // outputs only for non-draggable toolbar
  // TODO: revisit this since comment makes no sense
  @Output() closed: EventEmitter<void> = new EventEmitter();

  get height(): number {
    return 475;
  }

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
    return (this.labels && this.labels.help) || 'Help';
  }

  get closeLabel(): string {
    return (this.labels && this.labels.close) || 'Close';
  }
}
