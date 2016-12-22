import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { CovalentStepsModule, TdStepComponent, TdStepsComponent,
         IStepChangeEvent, StepState, StepMode } from '@covalent/core';
import { By } from '@angular/platform-browser';


describe('Component: Steps', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdStepsBasicTestComponent,
      ],
      imports: [
        CovalentStepsModule.forRoot(),
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render vertical step with label, sublabel and content hidden',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdStepsBasicTestComponent);
      let component: TdStepsBasicTestComponent = fixture.debugElement.componentInstance;
      component.label = 'Label';
      component.sublabel = 'Sublabel';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        // render 1 vertical step
        expect(fixture.debugElement.queryAll(By.css('.td-step-vertical-header')).length).toBe(1);
        // render number 1 in the circle
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-circle span')).nativeElement).innerHTML).toBe('1');
        // do not render the complete circle, nor the triangle icon
        expect(fixture.debugElement.query(By.css('.td-complete'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.td-triangle'))).toBeNull();

        // check if label was rendered
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-step-label')).nativeElement)
              .innerHTML.indexOf('Label') > -1).toBeTruthy();

        // check if sublabel was rendered
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-step-sublabel')).nativeElement)
              .innerHTML.indexOf('Sublabel') > -1).toBeTruthy();

        // check if header is not active
        expect(fixture.debugElement.query(By.css('.td-circle .md-active'))).toBeNull();

        // check if content is hidden
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-step-content-wrapper')).nativeElement)
        .style.display).toBe('none');
      });
  })));
});

@Component({
  selector: 'td-steps-basic-test',
  template: `
  <td-steps [mode]="mode">
    <td-step [label]="label" [sublabel]="sublabel" [active]="active" [state]="state" [disabled]="disabled">
      Content
    </td-step>
  </td-steps>
  `,
})
class TdStepsBasicTestComponent {
  label: string;
  sublabel: string;
  active: boolean;
  state: StepState;
  disabled: boolean;
  mode: StepMode;
}
