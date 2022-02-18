import { Component } from '@angular/core';

@Component({
  selector: 'highlight-demo-css',
  styleUrls: ['./highlight-demo-css.component.scss'],
  templateUrl: './highlight-demo-css.component.html',
})
export class HighlightDemoCssComponent {
  css = `
  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    margin: 0;
  }
  `;
}
