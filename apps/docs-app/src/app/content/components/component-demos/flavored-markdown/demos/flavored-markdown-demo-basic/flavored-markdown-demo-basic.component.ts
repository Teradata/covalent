import { Component } from '@angular/core';

@Component({
  selector: 'flavored-markdown-demo-basic',
  styleUrls: ['./flavored-markdown-demo-basic.component.scss'],
  templateUrl: './flavored-markdown-demo-basic.component.html',
})
export class FlavoredMarkdownDemoBasicComponent {
  basicFlavoredMarkdown = `
    ## Checkboxes

    - [x] My checkbox
    - [x] My second checkbox
    - [ ] My empty checkbox

    ## List

    + One
      + subline
    + Two
    + Three
      + subline
      + second subline
  `;
}
