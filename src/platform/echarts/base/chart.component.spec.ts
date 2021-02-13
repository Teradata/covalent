import { TestBed, inject, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CovalentBaseEchartsModule } from './base.module';

describe('Component: BaseEchart', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TdBaseEchartsBasicTestComponent],
        imports: [CovalentBaseEchartsModule],
      });
      TestBed.compileComponents();
    }),
  );

  it(
    'should render a canvas element',
    waitForAsync(
      inject([], () => {
        TestBed.createComponent(TdBaseEchartsBasicTestComponent);
      }),
    ),
  );
});

@Component({
  selector: 'td-base-echarts-basic-test',
  template: `
    <td-chart [style.height.px]="300"></td-chart>
  `,
})
class TdBaseEchartsBasicTestComponent {
  plot: any = [
    {
      color: '#575757',
      name: 'Test',
      type: 'bar',
      data: [100],
    },
  ];
}
