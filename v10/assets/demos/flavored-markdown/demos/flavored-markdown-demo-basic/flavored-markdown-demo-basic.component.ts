import { Component } from '@angular/core';

@Component({
  standalone: false,
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
    + Table in a list:
      | Tables        | Are           | Cool  |
      | ------------- |:-------------:| -----:|
      | **col 3 is**  | right-aligned | $1600 |
      | col 2 is      | *centered*    |   $12 |
      | zebra stripes | are neat      |    $1 |   
  `;
}
