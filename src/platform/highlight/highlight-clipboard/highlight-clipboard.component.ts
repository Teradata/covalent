import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'td-highlight-clipboard',
  templateUrl: './highlight-clipboard.component.html',
  styleUrls: ['./highlight-clipboard.component.scss'],
})
export class HighlightClipboardComponent {
  @Input() content: string;
  @Input() lang: string;
}
