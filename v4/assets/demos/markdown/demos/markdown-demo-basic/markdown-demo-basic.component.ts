import { Component } from '@angular/core';

@Component({
  selector: 'markdown-demo-basic',
  styleUrls: ['./markdown-demo-basic.component.scss'],
  templateUrl: './markdown-demo-basic.component.html',
})
export class MarkdownDemoBasicComponent {
  basicMarkdown = `
    # Heading (H1)

    ## Sub Heading (H2)

    ### Steps (H3)

    ###List Items

    - One
    - Two
    - Three
        * 4 extra spaces for nested lists
            * Another 4 spaces for a nested list

    Emphasis, aka italics, with *asterisks* or _underscores_.

    Strong emphasis, aka bold, with **asterisks** or __underscores__.

    Combined emphasis with **asterisks and _underscores_**.
  `;

  blockquoteMarkdown = `
    > Blockquotes are very handy in email to emulate reply text.
    > This line is part of the same quote.

    Quote break.

    > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure
    this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
  `;

  dividerMarkdown = `
    Three or more...

    ---

    Hyphens

    ***

    Asterisks

    ___

    Underscores
  `;

  codeblockMarkdown = `
    \`this is an inline code snippet\`

    \`\`\`javascript
    var s = "JavaScript syntax highlighting";
    alert(s);
    \`\`\`

    \`\`\`python
    s = "Python syntax highlighting"
    print s
    \`\`\`
  `;

  linksMarkdown = `
    [I'm an inline-style link](https://teradata.github.io/)

    [I'm a reference-style link case does not matter][Teradata Github Landing]

    [teradata github Landing]: https://teradata.github.io/

    Inline image:
    ![alt text here](assets/icons/teradata-dark.svg)

    Reference-style image:
    ![alt text][logo]

    [logo]: assets/icons/teradata-dark.svg "Teradata Labs"
  `;
}
