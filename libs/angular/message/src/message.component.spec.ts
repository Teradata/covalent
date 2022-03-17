import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TdMessageComponent } from './message.component';
import { CovalentMessageModule } from './message.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: Message', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, CovalentMessageModule],
        declarations: [
          TdMessageBasicTestComponent,
          TdMessageContentTestComponent,
          TdMessageOpenedTestComponent,
        ],
      });
      TestBed.compileComponents();
    })
  );

  it('should set label, sublabel and color `primary`, `red` and then change to color `accent`', (done) => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(
      TdMessageBasicTestComponent
    );
    const component: TdMessageBasicTestComponent =
      fixture.debugElement.componentInstance;

    component.label = 'Label';
    component.sublabel = 'Sublabel';
    component.color = 'primary';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(
        fixture.debugElement.query(By.directive(TdMessageComponent))
          .nativeElement.textContent
      ).toContain('Label');
      expect(
        fixture.debugElement.query(By.directive(TdMessageComponent))
          .nativeElement.textContent
      ).toContain('Sublabel');
      expect(
        (<HTMLElement>(
          fixture.debugElement.query(By.directive(TdMessageComponent))
            .nativeElement
        )).classList.contains('mat-primary')
      ).toBeTruthy();
      expect(
        fixture.debugElement.query(By.directive(TdMessageComponent))
          .componentInstance.color
      ).toBe('primary');
      component.color = 'red';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(
          (<HTMLElement>(
            fixture.debugElement.query(By.directive(TdMessageComponent))
              .nativeElement
          )).classList.contains('mat-primary')
        ).toBeFalsy();
        expect(
          (<HTMLElement>(
            fixture.debugElement.query(By.directive(TdMessageComponent))
              .nativeElement
          )).classList.contains('bgc-red-100')
        ).toBeTruthy();
        expect(
          (<HTMLElement>(
            fixture.debugElement.query(By.directive(TdMessageComponent))
              .nativeElement
          )).classList.contains('tc-red-700')
        ).toBeTruthy();
        expect(
          fixture.debugElement.query(By.directive(TdMessageComponent))
            .componentInstance.color
        ).toBe('red');
        component.color = 'accent';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(
            (<HTMLElement>(
              fixture.debugElement.query(By.directive(TdMessageComponent))
                .nativeElement
            )).classList.contains('mat-accent')
          ).toBeTruthy();
          expect(
            (<HTMLElement>(
              fixture.debugElement.query(By.directive(TdMessageComponent))
                .nativeElement
            )).classList.contains('bgc-red-100')
          ).toBeFalsy();
          expect(
            (<HTMLElement>(
              fixture.debugElement.query(By.directive(TdMessageComponent))
                .nativeElement
            )).classList.contains('tc-red-700')
          ).toBeFalsy();
          expect(
            fixture.debugElement.query(By.directive(TdMessageComponent))
              .componentInstance.color
          ).toBe('accent');
          done();
        });
      });
    });
  });

  it('should render the component with label and no sublabel', (done) => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(
      TdMessageBasicTestComponent
    );
    const component: TdMessageBasicTestComponent =
      fixture.debugElement.componentInstance;

    component.label = 'Label';
    component.color = 'primary';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(
        fixture.debugElement.query(By.css('.td-message-label'))
      ).toBeTruthy();
      expect(
        fixture.debugElement.query(By.css('.td-message-sublabel'))
      ).toBeFalsy();
      done();
    });
  });

  it('should render the component with a button content as actions', (done) => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(
      TdMessageContentTestComponent
    );
    const component: TdMessageContentTestComponent =
      fixture.debugElement.componentInstance;

    component.color = 'primary';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(
        fixture.debugElement
          .query(By.css('.td-message-wrapper'))
          .query(By.css('button'))
      ).toBeTruthy();
      done();
    });
  });

  it('should render the component, close it and then open it', (done) => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(
      TdMessageBasicTestComponent
    );
    const component: TdMessageBasicTestComponent =
      fixture.debugElement.componentInstance;
    const message: TdMessageComponent = fixture.debugElement.query(
      By.directive(TdMessageComponent)
    ).componentInstance;

    component.label = 'Label';
    component.color = 'primary';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(
        fixture.debugElement.query(By.css('.td-message-wrapper'))
      ).toBeTruthy();

      message.close();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(
          fixture.debugElement.query(By.css('.td-message-wrapper'))
        ).toBeFalsy();

        message.open();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.query(By.css('.td-message-wrapper'))
          ).toBeTruthy();
          done();
        });
      });
    });
  });

  it('should not render the component, open it and then close it', (done) => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(
      TdMessageOpenedTestComponent
    );
    const component: TdMessageOpenedTestComponent =
      fixture.debugElement.componentInstance;
    const message: TdMessageComponent = fixture.debugElement.query(
      By.directive(TdMessageComponent)
    ).componentInstance;

    component.label = 'Label';
    component.color = 'primary';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(
        fixture.debugElement.query(By.css('.td-message-wrapper'))
      ).toBeFalsy();

      message.open();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(
          fixture.debugElement.query(By.css('.td-message-wrapper'))
        ).toBeTruthy();

        message.close();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.query(By.css('.td-message-wrapper'))
          ).toBeFalsy();
          done();
        });
      });
    });
  });

  it('should render the component, toggle it and then toggle it again', (done) => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(
      TdMessageBasicTestComponent
    );
    const component: TdMessageBasicTestComponent =
      fixture.debugElement.componentInstance;
    const message: TdMessageComponent = fixture.debugElement.query(
      By.directive(TdMessageComponent)
    ).componentInstance;

    component.label = 'Label';
    component.color = 'primary';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(
        fixture.debugElement.query(By.css('.td-message-wrapper'))
      ).toBeTruthy();

      message.toggle();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(
          fixture.debugElement.query(By.css('.td-message-wrapper'))
        ).toBeFalsy();

        message.toggle();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.query(By.css('.td-message-wrapper'))
          ).toBeTruthy();
          done();
        });
      });
    });
  });

  it('should render the component, then [opened] to false', (done) => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(
      TdMessageOpenedTestComponent
    );
    const component: TdMessageOpenedTestComponent =
      fixture.debugElement.componentInstance;

    component.opened = true;
    component.label = 'Label';
    component.color = 'primary';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(
        fixture.debugElement.query(By.css('.td-message-wrapper'))
      ).toBeTruthy();
      component.opened = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(
          fixture.debugElement.query(By.css('.td-message-wrapper'))
        ).toBeFalsy();
        done();
      });
    });
  });

  it('should not render the component, set [opened] to true and then [opened] to false', (done) => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(
      TdMessageOpenedTestComponent
    );
    const component: TdMessageOpenedTestComponent =
      fixture.debugElement.componentInstance;

    component.label = 'Label';
    component.color = 'primary';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(
        fixture.debugElement.query(By.css('.td-message-wrapper'))
      ).toBeFalsy();

      component.opened = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(
          fixture.debugElement.query(By.css('.td-message-wrapper'))
        ).toBeTruthy();

        component.opened = false;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            fixture.debugElement.query(By.css('.td-message-wrapper'))
          ).toBeFalsy();
          done();
        });
      });
    });
  });
});

@Component({
  template: `
    <td-message
      [label]="label"
      [sublabel]="sublabel"
      [color]="color"
    ></td-message>
  `,
})
class TdMessageBasicTestComponent {
  label!: string;
  sublabel!: string;
  color!: string;
}

@Component({
  template: `
    <td-message [label]="label" [sublabel]="sublabel" [color]="color">
      <button td-message-actions>BUTTON</button>
    </td-message>
  `,
})
class TdMessageContentTestComponent {
  label = 'Label';
  sublabel = 'Sublabel';
  color = 'primary';
}

@Component({
  template: `
    <td-message [label]="label" [color]="color" [opened]="opened"></td-message>
  `,
})
class TdMessageOpenedTestComponent {
  label!: string;
  color!: string;
  opened!: boolean;
}
