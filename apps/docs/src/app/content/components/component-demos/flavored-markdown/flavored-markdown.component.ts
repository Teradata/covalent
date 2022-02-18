import { Component } from '@angular/core';

@Component({
  selector: 'flavored-markdown-demo',
  styleUrls: ['./flavored-markdown.component.scss'],
  templateUrl: './flavored-markdown.component.html',
})
export class FlavoredMarkdownDemoComponent {
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
