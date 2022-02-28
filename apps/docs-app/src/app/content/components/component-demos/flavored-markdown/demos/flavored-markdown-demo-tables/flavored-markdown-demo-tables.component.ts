import { Component } from '@angular/core';

@Component({
  selector: 'flavored-markdown-demo-tables',
  styleUrls: ['./flavored-markdown-demo-tables.component.scss'],
  templateUrl: './flavored-markdown-demo-tables.component.html',
})
export class FlavoredMarkdownDemoTablesComponent {
  tablesFlavoredMarkdown = `
    | Tables   |      Are      |  Cool |
    |----------|--------------:|------:|
    | col 1 is | left-aligned  | $1600 |
    | col 2 is | right-aligned |   $12 |
    | col 3 is | right-aligned |    $1 |
  `;
}
