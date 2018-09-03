import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CovalentBaseEchartsModule } from '../public-api';
import { By } from '@angular/platform-browser';

describe('Component: BaseEchart', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdBaseEchartsBasicTestComponent,
      ],
      imports: [
        CovalentBaseEchartsModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render a canvas element',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdBaseEchartsBasicTestComponent);
      let component: TdBaseEchartsBasicTestComponent = fixture.debugElement.componentInstance;
  })));

});

@Component({
  selector: 'td-base-echarts-basic-test',
  template: `
  <td-chart [style.height.px]="300"
          [yAxisType]="'value'"
          [xAxisType]="'category'"
          [dataZoom]="false"
          [data]="plot">
  </td-chart>
  `,
})
class TdBaseEchartsBasicTestComponent {
  plot: any = [{
    color: '#575757',
    name: 'Test',
    type: 'bar',
    data: [100],
  }];
}
