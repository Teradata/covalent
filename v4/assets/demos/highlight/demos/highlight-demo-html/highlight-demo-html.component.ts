import { Component } from '@angular/core';

@Component({
  selector: 'highlight-demo-html',
  styleUrls: ['./highlight-demo-html.component.scss'],
  templateUrl: './highlight-demo-html.component.html',
})
export class HighlightDemoHtmlComponent {
  html = `
  <div>
    <h1>hello world!</h1>
    <span>Some additional text here</span>
  </div>
  `;
}
