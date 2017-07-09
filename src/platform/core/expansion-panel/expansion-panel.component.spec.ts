import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentExpansionPanelModule, TdExpansionPanelComponent } from './expansion-panel.module';
import { By } from '@angular/platform-browser';

describe('Component: ExpansionPanel', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdExpansionPanelBasicTestComponent,
        TdExpansionPanelSummaryTestComponent,
      ],
      imports: [
        NoopAnimationsModule,
        CovalentExpansionPanelModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render expansion panel with label, sublabel and content hidden',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdExpansionPanelBasicTestComponent);
      let component: TdExpansionPanelBasicTestComponent = fixture.debugElement.componentInstance;
      component.label = 'Label';
      component.sublabel = 'Sublabel';
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.td-expanded'))).toBeFalsy();

        // check if label was rendered
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-expansion-label')).nativeElement)
              .innerHTML.indexOf('Label') > -1).toBeTruthy();

        // check if sublabel was rendered
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-expansion-sublabel')).nativeElement)
              .innerHTML.indexOf('Sublabel') > -1).toBeTruthy();

        // check if content is hidden
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<HTMLElement>fixture.debugElement.query(By.css('.td-expansion-content')).nativeElement)
          .style.display).toBe('none');
        });

      });
  })));

  it('should render expansion panel summary',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdExpansionPanelSummaryTestComponent);
      let component: TdExpansionPanelSummaryTestComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.td-expanded'))).toBeFalsy();

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          // check if content is hidden
          expect((<HTMLElement>fixture.debugElement.query(By.css('.td-expansion-content')).nativeElement)
          .style.display).toBe('none');
          // check if summary was rendered
          expect(fixture.debugElement.query(By.css('.td-expansion-summary'))).toBeTruthy();
        });
      });
  })));

  it('should mimic panel click, expand content, hide summary',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdExpansionPanelBasicTestComponent);
      let component: TdExpansionPanelBasicTestComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.debugElement.query(By.css('.td-expand-icon')).triggerEventHandler('click', new Event('click'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
        // check if content is rendered
        expect(fixture.debugElement.query(By.css('.td-expansion-content'))).toBeTruthy();

        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-expansion-content')).nativeElement)
        .style.display).toBe('none');

        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-expansion-summary')).nativeElement)
        .style.display).toBe('');

        });
      });
  })));

});

@Component({
  selector: 'td-expansion-panel-basic-test',
  template: `
  <td-expansion-panel [label]="label" 
                          [sublabel]="sublabel" 
                          [expand]="expansion1" 
                          [disabled]="disabled">
  `,
})
class TdExpansionPanelBasicTestComponent {
  label: string;
  sublabel: string;
  expand: boolean;
  disabled: boolean;
}

@Component({
  selector: 'td-expansion-summary-test',
  template: `
  <td-expansion-panel label="label" 
                      sublabel="sublabel" 
                      [expand]="expansion1" 
                      [disabled]="disabled">
    <td-expansion-summary>
      Summary
    </td-expansion-summary>
  </td-expansion-panel>
  `,
})
class TdExpansionPanelSummaryTestComponent {
  label: string;
  sublabel: string;
  expand: boolean;
  disabled: boolean;
}
