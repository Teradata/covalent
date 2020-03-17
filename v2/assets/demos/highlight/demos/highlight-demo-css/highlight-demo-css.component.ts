import { Component } from '@angular/core';

@Component({
  selector: 'highlight-demo-css',
  styleUrls: ['./highlight-demo-css.component.scss'],
  templateUrl: './highlight-demo-css.component.html',
})
export class HighlightDemoCssComponent {
  css: string = `
  .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 0;
    margin: 0;
  }
  `;
}
