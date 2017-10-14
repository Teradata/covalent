import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { CovalentStepsModule, StepState, StepMode } from './steps.module';

describe('Component: Steps', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdStepsBasicTestComponent,
        TdStepsSummaryTestComponent,
        TdStepsDynamicTestComponent,
      ],
      imports: [
        NoopAnimationsModule,
        CovalentStepsModule,
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
        expect(fixture.debugElement.query(By.css('.td-circle.mat-active'))).toBeNull();

        // check if summary was rendered
        expect(fixture.debugElement.query(By.css('.td-step-summary'))).toBeNull();

        // check if actions were rendered
        expect(fixture.debugElement.query(By.css('.td-step-actions'))).toBeNull();

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          // check if content is hidden
          expect((<HTMLElement>fixture.debugElement.query(By.css('.td-step-content-wrapper')).nativeElement)
          .style.display).toBe('none');
        });
      });
  })));

  it('should render vertical step with active content',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdStepsBasicTestComponent);
      let component: TdStepsBasicTestComponent = fixture.debugElement.componentInstance;
      component.label = 'Label';
      component.sublabel = 'Sublabel';
      component.active = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        // render number 1 in the circle
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-circle span')).nativeElement).innerHTML).toBe('1');

        // do not render the complete circle, nor the triangle icon
        expect(fixture.debugElement.query(By.css('.td-complete'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.td-triangle'))).toBeNull();

        // check if header is not active
        expect(fixture.debugElement.query(By.css('.td-circle.mat-active'))).toBeTruthy();

        // check if content is hidden
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-step-content-wrapper')).nativeElement)
        .style.display).toBe('');
      });
  })));

  it('should render horizontal step with hidden content',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdStepsBasicTestComponent);
      let component: TdStepsBasicTestComponent = fixture.debugElement.componentInstance;
      component.label = 'Label';
      component.sublabel = 'Sublabel';
      component.mode = StepMode.Horizontal;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        // render 1 horizontal step
        expect(fixture.debugElement.queryAll(By.css('.td-step-horizontal-header')).length).toBe(1);
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
        expect(fixture.debugElement.query(By.css('.td-circle.mat-active'))).toBeNull();

        // check if content is hidden
        expect((fixture.debugElement.query(By.css('.td-step-content-wrapper')))).toBeNull();

        // check if summary was rendered
        expect(fixture.debugElement.query(By.css('.td-step-summary'))).toBeNull();

        // check if actions were rendered
        expect(fixture.debugElement.query(By.css('.td-step-actions'))).toBeNull();
      });
  })));

  it('should render horizontal step with active content',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdStepsBasicTestComponent);
      let component: TdStepsBasicTestComponent = fixture.debugElement.componentInstance;
      component.label = 'Label';
      component.sublabel = 'Sublabel';
      component.mode = StepMode.Horizontal;
      component.active = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        // render number 1 in the circle
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-circle span')).nativeElement).innerHTML).toBe('1');

        // do not render the complete circle, nor the triangle icon
        expect(fixture.debugElement.query(By.css('.td-complete'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.td-triangle'))).toBeNull();

        // check if header is not active
        expect(fixture.debugElement.query(By.css('.td-circle.mat-active'))).toBeTruthy();

        // check if content is hidden
        expect(fixture.debugElement.query(By.css('.td-step-content-wrapper'))).toBeTruthy();
      });
  })));

  it('should render vertical step with required state',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdStepsBasicTestComponent);
      let component: TdStepsBasicTestComponent = fixture.debugElement.componentInstance;
      component.label = 'Label';
      component.sublabel = 'Sublabel';
      component.state = StepState.Required;
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.td-circle span'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.td-complete'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.td-triangle'))).toBeTruthy();

      });
  })));

  it('should render vertical step with complete state and summary',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdStepsSummaryTestComponent);
      let component: TdStepsSummaryTestComponent = fixture.debugElement.componentInstance;
      component.label = 'Label';
      component.sublabel = 'Sublabel';
      component.state = StepState.Complete;
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.td-circle span'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.td-complete'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-triangle'))).toBeNull();

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          // check if content is hidden
          expect((<HTMLElement>fixture.debugElement.query(By.css('.td-step-content-wrapper')).nativeElement)
                .style.display).toBe('none');

          fixture.detectChanges();
          fixture.whenStable().then(() => {
            // check if summary was rendered
            expect(fixture.debugElement.query(By.css('.td-step-summary'))).toBeTruthy();
            expect((<HTMLElement>fixture.debugElement.query(By.css('.td-step-summary')).nativeElement)
                  .innerHTML.indexOf('Summary') > -1).toBeTruthy();
          });
        });
      });
  })));

  it('should render dynamic steps from an ngFor loop',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdStepsDynamicTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        // render 3 vertical steps
        expect(fixture.debugElement.queryAll(By.css('.td-step-vertical-header')).length).toBe(3);

        let stepNo: number = 1;
        fixture.debugElement.queryAll(By.css('.td-circle span')).forEach((element: DebugElement) => {
          expect((<HTMLElement>element.nativeElement).innerHTML).toBe('' + stepNo++);
        });
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

@Component({
  selector: 'td-steps-summary-test',
  template: `
  <td-steps>
    <td-step [label]="label" [sublabel]="sublabel" [active]="active" [state]="state" [disabled]="disabled">
      Content
      <ng-template td-step-summary>
        Summary
      </ng-template>
    </td-step>
  </td-steps>
  `,
})
class TdStepsSummaryTestComponent {
  label: string;
  sublabel: string;
  active: boolean;
  state: StepState;
  disabled: boolean;
}

@Component({
  selector: 'td-steps-dynamic-test',
  template: `
  <td-steps>
    <td-step [label]="step" *ngFor="let step of ['step1', 'step2', 'step3']">
      Content
    </td-step>
  </td-steps>
  `,
})
class TdStepsDynamicTestComponent {

}
