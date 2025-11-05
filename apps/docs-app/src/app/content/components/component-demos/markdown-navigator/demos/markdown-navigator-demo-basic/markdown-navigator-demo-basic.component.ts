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
      id: '',
      title: 'Get started',
      description: 'New to OneTerdata? Start here.',
      icon: 'rocket_launch',
      url: '',
      children: [
        {
          id: '',
          title: 'Learning resources',
          description: 'Take a tour, try samples, and find documentation.',
          url: '',
        },
      ],
    },
    {
      id: '',
      title: 'OneTeradata',
      description: 'Get insights faster.',
      url: '',
      children: [
        {
          id: '',
          title: 'Account settings',
          description: 'Set your defaults and preferences.',
          url: '',
        },
        {
          id: '',
          title: 'Integrations',
          description: 'Accelerate your work with more tools.',
          icon: 'apps_outlined',
          url: '',
        },
      ],
    },
    {
      id: '',
      title: 'Ask Terry',
      description: 'Your AI assitant.',
      icon: 'chat_add_on_outlined',
      url: '',
    },
    {
      id: '',
      title: 'Notebooks',
      description: 'Explore your data and build AI/ML models.',
      icon: 'book_outlined',
      url: '',
    },
    {
      id: '',
      title: 'Vector store',
      icon: 'variable_outlined',
      description: 'Convert data for semantic search and RAG applications.',
      url: '',
    },
    {
      id: '',
      title: 'ModelOps',
      icon: 'product_modelops',
      description: 'Deploy, monitor, and manage your AI/ML models',
      url: '',
    },
  ];
  // items: IMarkdownNavigatorItem[] = [
  //   {
  //     title: 'RxJS',
  //     description: 'Reactive programming',
  //     icon: 'speed',
  //     url: 'https://github.com/ReactiveX/rxjs/blob/master/README.md',
  //     children: [
  //       {
  //         title: 'Intro pt 1',
  //         markdownString: '🔥',
  //       },
  //       {
  //         title: 'Intro pt 2',
  //         markdownString: '⚡',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Covalent',
  //     description: 'Terdata UI Platform',
  //     icon: 'whatshot',
  //     url: 'https://github.com/Teradata/covalent/blob/main/README.md',
  //   },
  // ];
}
