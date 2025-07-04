import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { getThemes } from '@covalent/echarts/base';
import { ITdWordCloudData } from '@covalent/echarts/wordcloud';

import { ChartThemeSelectorService } from '../../../../../../utilities/chart-theme';

@Component({
  standalone: false,
  selector: 'wordcloud-demo-basic',
  templateUrl: './wordcloud-demo-basic.component.html',
  styleUrls: ['./wordcloud-demo-basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordcloudDemoBasicComponent implements OnInit {
  private _cdr = inject(ChangeDetectorRef);
  themeSelector = inject(ChartThemeSelectorService);

  themes: string[] = getThemes();
  selectedTheme!: string;

  words: string[] = [
    'Covalent',
    'Teradata',
    'Angular',
    'TypeScript',
    'JavaScript',
    'Protractor',
    'Karma',
    'Ruby',
    'Rails',
    'Ruby on Rails',
    'Java',
    'Scala',
    'RSpec',
    'Cucumber',
    'JUnit',
    'Elixir',
    'Twitter Bootstrap',
    'HTML',
    'CSS',
    'SASS',
    'PHP',
  ];
  words2: string[] = [
    'Engineering',
    'Applied Science',
    'Engineering Science',
    'Innovation',
    'Tech',
    'Technological',
    'Computing',
    'Informatics',
    'Biotechnology',
    'Science',
    'Telematics',
    'Industry',
    'Research',
    'Information',
    'Development',
    'Cyber',
    'Energy',
    'Techs',
    'Technicians',
    'Computerization',
    'Techno',
  ];

  componentExampleRandomWords: ITdWordCloudData[] = this.generateRandomWords(
    this.words2,
  );

  // Chart config
  config: any = {
    tooltip: {},
    series: [
      {
        type: 'wordCloud',
        shape: 'triangle',
        sizeRange: [8, 50],
        rotationRange: [-30, 30],
        color: this.randomColor,
        data: this.generateRandomWords(this.words),
      },
    ],
  };

  async ngOnInit(): Promise<void> {
    this.selectedTheme = this.themeSelector.selected;
    this._cdr.markForCheck();
  }

  randomColor(): string {
    return (
      'rgb(' +
      [
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160),
      ].join(',') +
      ')'
    );
  }

  generateRandomWords(words: string[]): ITdWordCloudData[] {
    const wordList = [];
    for (let i = 0; i < 30; i++) {
      wordList.push({
        name: words[Math.floor(Math.random() * words.length)],
        value: Math.floor(Math.random() * 100),
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          },
          color: this.randomColor(),
        },
      });
    }
    return wordList;
  }

  selectChartTheme(theme: string): void {
    this.themeSelector.select(theme);
  }
}
