import { Component, Output, EventEmitter, Input } from '@angular/core';

interface IHelpMenuDataItem {
  title: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IHelpMenuDataItem[];
}

enum MaximizedOrMinimized {
  Maximized = 'Maximized',
  Minimized = 'Minimized',
}

@Component({
  selector: 'td-help-window',
  templateUrl: './help-window.component.html',
  styleUrls: ['./help-window.component.scss'],
})
export class HelpWindowComponent {
  @Input() items: IHelpMenuDataItem[];

  @Output() minimized: EventEmitter<any> = new EventEmitter();
  @Output() maximized: EventEmitter<any> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  currentState: MaximizedOrMinimized = MaximizedOrMinimized.Maximized;

  get showMaximizeButton(): boolean {
    return this.currentState === MaximizedOrMinimized.Minimized;
  }

  get showMinimizeButton(): boolean {
    return this.currentState === MaximizedOrMinimized.Maximized;
  }

  get height(): number {
    return this.currentState === MaximizedOrMinimized.Maximized ? 475 : 0;
  }

  constructor() {}

  minimize(): void {
    this.currentState = MaximizedOrMinimized.Minimized;
    this.minimized.emit();
  }

  maximize(): void {
    this.currentState = MaximizedOrMinimized.Maximized;
    this.maximized.emit();
  }

  close(): void {
    this.closed.emit();
  }
}
