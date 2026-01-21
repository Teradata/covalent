import { Component } from '@angular/core';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

@Component({
  standalone: false,
  selector: 'markdown-navigator-demo-basic',
  styleUrls: ['./markdown-navigator-demo-basic.component.scss'],
  templateUrl: './markdown-navigator-demo-basic.component.html',
})
export class MarkdownNavigatorDemoBasicComponent {
  items: IMarkdownNavigatorItem[] = [
    {
      title: 'RxJS',
      description: 'Reactive programming',
      icon: 'speed',
      url: 'https://github.com/ReactiveX/rxjs/blob/master/README.md',
      children: [
        {
          title: 'Intro pt 1',
          markdownString: '🔥',
        },
        {
          title: 'Intro pt 2',
          markdownString: '⚡',
        },
      ],
    },
    {
      title: 'Covalent',
      description: 'Teradata UI Platform',
      icon: 'whatshot',
      url: 'https://github.com/Teradata/covalent/blob/main/README.md',
    },
    {
      title: 'Example Feature',
      description: 'Sample feature with Covalent icon',
      icon: 'data_preparation_outlined;covalent-icons',
      markdownString: '# Example\n\nThis uses a Covalent icon.',
    },
    {
      title: 'Another Example',
      description: 'Another sample with Covalent icon',
      icon: 'code_fork_outlined;covalent-icons',
      children: [
        {
          title: 'Sub item',
          icon: 'folder',
          markdownString: '# Sub Item\n\nA nested example.',
        },
      ],
    },
  ];
}
