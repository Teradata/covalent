import {
  Component,
  Input,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'cfm-code-block',
  styleUrls: ['./cfm-code-block.component.scss'],
  templateUrl: './cfm-code-block.component.html',
})
export class TdFlavoredCodeBlockComponent {
  @Input() showCopyCodeAction: boolean = false;
  @Input() language: string;
  @Input() content: string;

  constructor(private _cdr: ChangeDetectorRef) {}

  copyToClipboard(value: string): void {
    let textarea: HTMLTextAreaElement = document.createElement('textarea');
    textarea.innerHTML = value;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    this._cdr.markForCheck();
  }
}
