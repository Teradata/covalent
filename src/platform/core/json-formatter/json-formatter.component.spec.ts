import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { CovalentJsonFormatterModule } from './json-formatter.module';
import { By } from '@angular/platform-browser';

describe('Component: JsonFormatter', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdJsonFormatterBasicTestComponent,
      ],
      imports: [
        CovalentJsonFormatterModule.forRoot(),
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render component with no notification tip',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdJsonFormatterBasicTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        
      });
  })));

});

@Component({
  selector: 'td-json-formatter-basic-test',
  template: `
  <td-json-formatter [data]="data" [levelsOpen]="levelsOpen">

  </td-json-formatter>
  `,
})
class TdJsonFormatterBasicTestComponent {

  data: any;
  levelsOpen: number = 0;

}
