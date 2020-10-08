import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-demo-deprecated-lang-attribute',
  templateUrl: './highlight-demo-deprecated-lang-attribute.component.html',
  styleUrls: ['./highlight-demo-deprecated-lang-attribute.component.scss']
})
export class HighlightDemoDeprecatedLangAttributeComponent {

  html: string = `
  <div>
    <h1>hello world!</h1>
    <span>Some additional text here</span>
  </div>
  `;
}
