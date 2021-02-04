import { Component } from '@angular/core';

@Component({
  selector: 'markdown-demo-youtube',
  styleUrls: ['./markdown-demo-youtube.component.scss'],
  templateUrl: './markdown-demo-youtube.component.html',
})
export class MarkdownDemoYoutubeComponent {
  videoMarkdown: string = `
## Embed YouTube Videos

Use this custom embed syntax and you can embed YouTube videos with ease
\`\`\`![youtube URL here]\`\`\`

This works with any of these base URLs (with or without the 'https://www.' portion):
* youtube.com
* youtu.be

## Example

### Short syntax
(youtu.be/dQw4w9WgXcQ?autoplay=true)

![youtu.be/dQw4w9WgXcQ?autoplay=true]

### Watch link syntax
(https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=true)

![https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=true]

### Embed link syntax
(www.youtube.com/embed/dQw4w9WgXcQ?autoplay=true)

![www.youtube.com/embed/dQw4w9WgXcQ?autoplay=true]

### Playlist embedding
(https://youtube.com/playlist?list=PLXIU9mpT9-03zDjIdMvJRmcANfW644x3F)

![https://youtube.com/playlist?list=PLXIU9mpT9-03zDjIdMvJRmcANfW644x3F]
  `;
}
