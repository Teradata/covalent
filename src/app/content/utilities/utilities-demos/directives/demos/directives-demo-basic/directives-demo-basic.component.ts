import { Component } from '@angular/core';

@Component({
  selector: 'directives-demo-basic',
  styleUrls: ['./directives-demo-basic.component.scss'],
  templateUrl: './directives-demo-basic.component.html',
  preserveWhitespaces: true,
})
export class DirectivesDemoBasicComponent {
  trim: string = '';
}
