import { Component, HostBinding, AfterViewInit } from '@angular/core';
import { GitHubService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  // Current date
  year: any = new Date().getFullYear();

  starCount: number = 0;

  sections: object[] = [
    {
      description: 'Reusable, atomic and enterprise focused',
      icon: 'extension',
      route: 'components',
      title: 'Components',
    },
    {
      description: 'The extensive power of ECharts brought to Angular',
      icon: 'bar_chart',
      route: 'echarts',
      title: 'Charts',
    },
    {
      description: 'Reduce boilerplate with custom pipes, css, animations and more',
      icon: 'build',
      route: 'utilities',
      title: 'Utilities',
    },
  ];

  repos: object[] = [
    {
      color: 'amber-A400',
      description: 'A pre-built Angular 4 app using Covalent ready to go!',
      icon: 'flash_on',
      link: 'https://github.com/Teradata/covalent-quickstart',
      title: 'Covalent Quickstart',
    },
    {
      color: 'orange-A400',
      description: 'A native desktop hybrid starter app built on Electron.',
      icon: 'laptop_mac',
      link: 'https://github.com/Teradata/covalent-electron',
      title: 'Covalent Electron',
    },
    {
      color: 'deep-orange-A400',
      description: 'Mock API server for rapid prototyping and API standards.',
      icon: 'aspect_ratio',
      link: 'https://github.com/Teradata/covalent-data',
      title: 'Covalent Data',
    },
  ];

  constructor(private _gitHubService: GitHubService) {}

  ngAfterViewInit(): void {
    this._gitHubService.queryStartCount().subscribe((starsCount: number) => {
      this.starCount = starsCount;
    });
  }

  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
}
