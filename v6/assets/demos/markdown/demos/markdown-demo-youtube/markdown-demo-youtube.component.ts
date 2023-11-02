import { Component } from '@angular/core';

@Component({
  selector: 'markdown-demo-youtube',
  styleUrls: ['./markdown-demo-youtube.component.scss'],
  templateUrl: './markdown-demo-youtube.component.html',
})
export class MarkdownDemoYoutubeComponent {
  videoMarkdown = `
## Embed YouTube Videos

Use this custom embed syntax and you can embed YouTube videos with ease
\`\`\`![youtube URL here]\`\`\`

This works with any of these base URLs (with or without the 'https://www.' portion):
* youtube.com
* youtu.be

## Example



### Short syntax
(youtu.be/dQw4w9WgXcQ)

![youtu.be/dQw4w9WgXcQ]

### Watch link syntax
(https://www.youtube.com/watch?v=dQw4w9WgXcQ&start=10)

![https://www.youtube.com/watch?v=dQw4w9WgXcQ&start=10]

### Embed link syntax
(www.youtube.com/embed/dQw4w9WgXcQ?start=20)

![www.youtube.com/embed/dQw4w9WgXcQ?start=20]

### Playlist embedding
(https://youtube.com/playlist?list=PLXIU9mpT9-03zDjIdMvJRmcANfW644x3F)

![https://youtube.com/playlist?list=PLXIU9mpT9-03zDjIdMvJRmcANfW644x3F&autoplay=1]
  `;
}
