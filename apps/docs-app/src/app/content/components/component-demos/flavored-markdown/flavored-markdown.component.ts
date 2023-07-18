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

## Table

|Connects to|With connector|
|-----------|--------------|
|VantageCloud Enterprise on Azure|Teradata-to-TeradataTo setup and configure the required PrivateLink endpoint on VantageCloud Enterprise, open a [PrivateLink change request](https://www.google.com) on the VantageCloud Enterprise customer support portal.|
|VantageCore (on-premises)|Teradata-to-Teradata|
|**This text is bolded**|*this text is italicized*|
  `;
}
