import { Component } from '@angular/core';
import { ICopyCodeTooltips } from '@covalent/highlight';

@Component({
  selector: 'flavored-markdown-demo-inline',
  styleUrls: ['./flavored-markdown-demo-inline.component.scss'],
  templateUrl: './flavored-markdown-demo-inline.component.html',
})
export class FlavoredMarkdownDemoInlineComponent {
  inlineFlavoredMarkdown = `
    ## Inline

    Inline piece of code \`var obj: Type = bla;\`

    ## Snippet

    \`\`\`typescript
      @Component({
        selector: 'demo',
        styleUrls: ['./demo.component.scss'],
        templateUrl: './demo.component.html',
      })
      export class DemoComponent {
        property: Type;
      }
    \`\`\`
  `;

  tooltipsConfig: ICopyCodeTooltips = {
    copy: 'Copiar',
    copied: 'Copiado',
  };
}
