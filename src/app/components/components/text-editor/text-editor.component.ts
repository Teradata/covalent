import { Component, HostBinding, ViewChild } from '@angular/core';
import { slideInDownAnimation } from '../../../app.animations';
import { TdTextEditorComponent } from '@covalent/text-editor';

@Component({
  selector: 'text-editor-demo',
  styleUrls: [ './text-editor.component.scss' ],
  templateUrl: './text-editor.component.html',
  animations: [slideInDownAnimation],
})
export class TextEditorDemoComponent {

  @ViewChild('editor') private _tdEditor: TdTextEditorComponent;
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  editorVal: string = `# Intro
Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](https://google.com).
You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.

## Lists
Unordered lists can be started using the toolbar or by typing '* ', '- ', or '+ '. Ordered lists can be started by typing '1. '.

#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift-tabs work too

#### Ordered
1. Numbered lists...
2. ...work too!

## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)
`;
}
