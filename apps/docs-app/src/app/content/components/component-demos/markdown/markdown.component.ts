import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'markdown-demo',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
})
export class MarkdownDemoComponent {
  anchor!: string;
  markdown = `
    # Heading (H1)
    ## Sub Heading (H2)
    ### Steps (H3)

    | Tables        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | **col 3 is**  | right-aligned | $1600 |
    | col 2 is      | *centered*    |   $12 |
    | zebra stripes | are neat      |    $1 |
  `;

  jumpToH1(): void {
    this.anchor = 'heading-1';
  }

  jumpToH2(): void {
    this.anchor = 'heading-2';
  }
}
