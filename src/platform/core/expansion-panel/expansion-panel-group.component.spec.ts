import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  CovalentExpansionPanelModule,
  TdExpansionPanelComponent,
} from './public-api';
import { By } from '@angular/platform-browser';
import { TdExpansionPanelGroupComponent } from './expansion-panel-group.component';

describe('Component: ExpansionPanelGroup', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdExpansionPanelGroupTestComponent,
        TdExpansionPanelGroupMultiInitTestComponent,
      ],
      imports: [NoopAnimationsModule, CovalentExpansionPanelModule],
    });
    TestBed.compileComponents();
  }));

  it('should allow multiple panels to be opened at once if multi is true', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(
        TdExpansionPanelGroupTestComponent,
      );
      const component: TdExpansionPanelGroupTestComponent =
        fixture.debugElement.componentInstance;
      component.multi = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let openPanels: DebugElement[] = getAllOpenPanels(fixture);
        expect(openPanels.length).toBe(0);
        const allPanels: DebugElement[] = getAllPanels(fixture);
        togglePanel(allPanels[0]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          openPanels = getAllOpenPanels(fixture);
          expect(openPanels.length).toBe(1);
          togglePanel(allPanels[1]);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            openPanels = getAllOpenPanels(fixture);
            expect(openPanels.length).toBe(2);
          });
        });
      });
    }),
  ));

  it('should not allow multiple panels to be opened at once if multi is false', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(
        TdExpansionPanelGroupTestComponent,
      );
      const component: TdExpansionPanelGroupTestComponent =
        fixture.debugElement.componentInstance;
      component.multi = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let openPanels: DebugElement[] = getAllOpenPanels(fixture);
        expect(openPanels.length).toBe(0);
        const allPanels: DebugElement[] = getAllPanels(fixture);
        togglePanel(allPanels[0]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          openPanels = getAllOpenPanels(fixture);
          expect(openPanels.length).toBe(1);
          togglePanel(allPanels[1]);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            openPanels = getAllOpenPanels(fixture);
            expect(openPanels.length).toBe(1);
          });
        });
      });
    }),
  ));

  it('should only open the last panel that has the expand input enabled, if multi is true and multiple panels have the expand input enabled', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(
        TdExpansionPanelGroupMultiInitTestComponent,
      );
      const component: TdExpansionPanelGroupMultiInitTestComponent =
        fixture.debugElement.componentInstance;
      component.multi = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let openPanels: DebugElement[] = getAllOpenPanels(fixture);
        expect(openPanels.length).toBe(1);
        const allPanels: DebugElement[] = getAllPanels(fixture);
        openPanels = getAllOpenPanels(fixture);
        const lastPanel: DebugElement = openPanels[openPanels.length - 1];
        expect(allPanels[allPanels.length - 2]).toBe(lastPanel);
      });
    }),
  ));

  it('should only leave last panel opened open if multi is set to false', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(
        TdExpansionPanelGroupTestComponent,
      );
      const component: TdExpansionPanelGroupTestComponent =
        fixture.debugElement.componentInstance;
      component.multi = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let openPanels: DebugElement[] = getAllOpenPanels(fixture);
        expect(openPanels.length).toBe(0);
        const allPanels: DebugElement[] = getAllPanels(fixture);
        openPanels = getAllOpenPanels(fixture);
        togglePanel(allPanels[0]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          openPanels = getAllOpenPanels(fixture);
          expect(openPanels.length).toBe(1);
          togglePanel(allPanels[1]);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            openPanels = getAllOpenPanels(fixture);
            expect(openPanels.length).toBe(2);
            component.multi = false;
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              openPanels = getAllOpenPanels(fixture);
              expect(openPanels.length).toBe(1);
              expect(openPanels[0]).toBe(allPanels[1]);
            });
          });
        });
      });
    }),
  ));

  it('should open all panels if the openAll method is called, and multi is set to true', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(
        TdExpansionPanelGroupTestComponent,
      );
      const component: TdExpansionPanelGroupTestComponent =
        fixture.debugElement.componentInstance;
      component.multi = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let openPanels: DebugElement[] = getAllOpenPanels(fixture);
        expect(openPanels.length).toBe(0);
        const panelGroup: TdExpansionPanelGroupComponent = fixture.debugElement.query(
          By.directive(TdExpansionPanelGroupComponent),
        ).componentInstance;
        panelGroup.openAll();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          openPanels = getAllOpenPanels(fixture);
          expect(openPanels.length).toBe(3);
        });
      });
    }),
  ));

  it('should not open any new panels if the openAll method is called, and multi is set to false', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(
        TdExpansionPanelGroupTestComponent,
      );
      const component: TdExpansionPanelGroupTestComponent =
        fixture.debugElement.componentInstance;
      component.multi = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let openPanels: DebugElement[] = getAllOpenPanels(fixture);
        expect(openPanels.length).toBe(0);
        const panelGroup: TdExpansionPanelGroupComponent = fixture.debugElement.query(
          By.directive(TdExpansionPanelGroupComponent),
        ).componentInstance;
        panelGroup.openAll();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          openPanels = getAllOpenPanels(fixture);
          expect(openPanels.length).toBe(0);
        });
      });
    }),
  ));

  it('should close all panels if the closeAll method is called', async(
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(
        TdExpansionPanelGroupTestComponent,
      );
      const component: TdExpansionPanelGroupTestComponent =
        fixture.debugElement.componentInstance;
      component.multi = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let openPanels: DebugElement[] = getAllOpenPanels(fixture);
        expect(openPanels.length).toBe(0);
        const panelGroup: TdExpansionPanelGroupComponent = fixture.debugElement.query(
          By.directive(TdExpansionPanelGroupComponent),
        ).componentInstance;
        panelGroup.openAll();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          openPanels = getAllOpenPanels(fixture);
          expect(openPanels.length).toBe(3);
          panelGroup.closeAll();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            openPanels = getAllOpenPanels(fixture);
            expect(openPanels.length).toBe(0);
          });
        });
      });
    }),
  ));
});

@Component({
  selector: 'td-expansion-panel-group-basic-test',
  template: `
    <td-expansion-panel-group [multi]="multi">
      <td-expansion-panel [label]="panel1"></td-expansion-panel>
      <td-expansion-panel [label]="panel2"></td-expansion-panel>
      <td-expansion-panel [label]="panel3"></td-expansion-panel>
    </td-expansion-panel-group>
  `,
})
class TdExpansionPanelGroupTestComponent {
  multi: boolean;
}

@Component({
  selector: 'td-expansion-panel-group-multi-init-expanded-test',
  template: `
    <td-expansion-panel-group [multi]="multi">
      <td-expansion-panel [label]="panel1" [expand]="panel1Expanded">
      </td-expansion-panel>
      <td-expansion-panel [label]="panel2" [expand]="panel2Expanded">
      </td-expansion-panel>
      <td-expansion-panel [label]="panel3" [expand]="panel3Expanded">
      </td-expansion-panel>
    </td-expansion-panel-group>
  `,
})
class TdExpansionPanelGroupMultiInitTestComponent {
  panel1Expanded: boolean = true;
  panel2Expanded: boolean = true;
  panel3Expanded: boolean = false;
  multi: boolean;
}

function getAllPanels(fixture: ComponentFixture<any>): DebugElement[] {
  return fixture.debugElement.queryAll(By.directive(TdExpansionPanelComponent));
}

function getAllOpenPanels(fixture: ComponentFixture<any>): DebugElement[] {
  return fixture.debugElement
    .queryAll(By.directive(TdExpansionPanelComponent))
    .filter(
      (element: DebugElement) =>
        element.query(By.css('.td-expansion-content')).nativeElement.style
          .height !== '0px',
    );
}

function togglePanel(panel: DebugElement): void {
  panel
    .query(By.css('.td-expansion-panel-header'))
    .triggerEventHandler('click', new Event('click'));
}
