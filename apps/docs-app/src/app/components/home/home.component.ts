import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GitHubService } from '../../services';

interface IRouteConfig {
  icon?: string;
  route?: string;
  title?: string;
  date?: string;
  link?: string;
  description?: string;
  color?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  // Current date
  year: any = new Date().getFullYear();

  starCount = 0;

  sections: IRouteConfig[] = [
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
      description:
        'Reduce boilerplate with custom pipes, css, animations and more',
      icon: 'build',
      route: 'utilities',
      title: 'Utilities',
    },
  ];

  repos: IRouteConfig[] = [
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

  private _destroy$ = new Subject<void>();

  constructor(private _gitHubService: GitHubService) {}

  ngAfterViewInit(): void {
    this._gitHubService
      .queryStartCount()
      .pipe(takeUntil(this._destroy$))
      .subscribe((starsCount: number) => {
        this.starCount = starsCount;
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  get activeTheme(): string {
    return localStorage.getItem('theme') ?? '';
  }
}
