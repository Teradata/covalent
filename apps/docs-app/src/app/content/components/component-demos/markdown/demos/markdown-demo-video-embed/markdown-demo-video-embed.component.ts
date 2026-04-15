import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'markdown-demo-video-embed',
  styleUrls: ['./markdown-demo-video-embed.component.scss'],
  templateUrl: './markdown-demo-video-embed.component.html',
})
export class MarkdownDemoVideoEmbedComponent {
  videoMarkdown = `
## Embed Local Video Files

You can embed video files directly in markdown using standard HTML5 video tags.
This works with common video formats like .mp4, .webm, and .mov.

### Basic video embed

Simply use HTML5 video syntax:

\`\`\`html
<video controls width="600">
  <source src="/assets/videos/sample.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
\`\`\`

### Example with controls

<video controls width="600" height="400">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Example with poster image

<video controls width="600" poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217">
  <source src="https://download.blender.org/demo/movies/BBB/bbb_sunflower_1080p_30fps_normal.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Supported attributes:
- \`controls\` - Show playback controls
- \`width\` / \`height\` - Set video dimensions
- \`poster\` - Set thumbnail image
- \`preload\` - Control preloading (none/metadata/auto)
- \`loop\` - Loop the video
- \`muted\` - Start muted
- \`autoplay\` - Auto-play on load (use carefully!)

### Notes:
- For relative paths, make sure to set the \`hostedUrl\` input
- Multiple \`<source>\` tags can be used for browser compatibility
- Video files should be served from accessible URLs
  `;

  localVideoMarkdown = `
## Local Video Example

This example uses a video from the local assets folder:

<video controls width="600" height="400">
  <source src="assets/video/example.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Code:
\`\`\`html
<video controls width="600" height="400">
  <source src="assets/video/example.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
\`\`\`

**Note:** The video file is located at \`apps/docs-app/src/assets/video/example.mp4\`
  `;
}
