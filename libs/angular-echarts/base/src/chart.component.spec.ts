import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { TdChartComponent } from './chart.component';

describe('Component: BaseEchart', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TdBaseEchartsBasicTestComponent],
      });
      TestBed.compileComponents();
    })
  );

  it(
    'should render a canvas element',
    waitForAsync(
      inject([], () => {
        TestBed.createComponent(TdBaseEchartsBasicTestComponent);
      })
    )
  );
});

@Component({
  selector: 'td-base-echarts-basic-test',
  template: ` <td-chart [style.height.px]="300"></td-chart> `,
  imports: [TdChartComponent]
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
