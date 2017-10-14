import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { CovalentNotificationsModule,
         TdNotificationCountPositionX, TdNotificationCountPositionY } from './notifications.module';
import { By } from '@angular/platform-browser';

describe('Component: NotificationCount', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdNotificationCountBasicTestComponent,
        TdNotificationCountContentTestComponent,
        TdNotificationCountPositionTestComponent,
        TdNotificationCountPositionContentTestComponent,
      ],
      imports: [
        MatIconModule,
        CovalentNotificationsModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render component with no notification tip',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNotificationCountBasicTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.td-notification-content'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-notification-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.td-notification-no-count'))).toBeFalsy();
      });
  })));

  it('should render component notification tip with no count nor number',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNotificationCountBasicTestComponent);
      let component: TdNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.td-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-notification-no-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-notification-count'))
               .nativeElement.textContent.trim()).toBeFalsy();
      });
  })));

  it('should render component notification tip with count and number',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNotificationCountBasicTestComponent);
      let component: TdNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 44;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.td-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-notification-no-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.td-notification-count'))
               .nativeElement.textContent.trim()).toContain(component.notifications);
      });
  })));

  it('should render component with notification tip hidden',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNotificationCountBasicTestComponent);
      let component: TdNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 0;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.td-notification-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.td-notification-no-count'))).toBeFalsy();
      });
  })));

  it('should render component with notification tip and then hide it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNotificationCountBasicTestComponent);
      let component: TdNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.td-notification-count'))).toBeTruthy();
        component.notifications = false;
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(fixture.debugElement.query(By.css('.td-notification-count'))).toBeFalsy();
        });
      });
  })));

  it('should render component notification tip with count and 99+',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNotificationCountBasicTestComponent);
      let component: TdNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 100;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.td-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-notification-no-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.td-notification-count'))
               .nativeElement.textContent.trim()).toContain('99+');
      });
  })));

  it('should render component with content transcluded',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNotificationCountContentTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.td-notification-content'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('mat-icon'))).toBeTruthy();
      });
  })));

  it('should render component with content and default positionY top and position X after',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNotificationCountPositionContentTestComponent);
      let component: TdNotificationCountPositionContentTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.td-notification-top'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-notification-after'))).toBeTruthy();
      });
  })));

  it('should render component with no content and default positionY top and position X after',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNotificationCountPositionTestComponent);
      let component: TdNotificationCountPositionTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.td-notification-center-x'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-notification-center-y'))).toBeTruthy();
      });
  })));

  it('should render component with positionY bottom and position X before',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdNotificationCountPositionTestComponent);
      let component: TdNotificationCountPositionTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      component.positionX = TdNotificationCountPositionX.Before;
      component.positionY = TdNotificationCountPositionY.Bottom;
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.td-notification-before'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-notification-bottom'))).toBeTruthy();
      });
  })));

});

@Component({
  selector: 'td-notification-count-basic-test',
  template: `
  <td-notification-count color="color" [notifications]="notifications">

  </td-notification-count>
  `,
})
class TdNotificationCountBasicTestComponent {

  color: string;
  notifications: any;

}

@Component({
  selector: 'td-notification-count-content-test',
  template: `
  <td-notification-count>
    <mat-icon>notifications</mat-icon>
  </td-notification-count>
  `,
})
class TdNotificationCountContentTestComponent {}

@Component({
  selector: 'td-notification-count-position-test',
  template: `
  <td-notification-count [positionX]="positionX" [positionY]="positionY" [notifications]="notifications">

  </td-notification-count>
  `,
})
class TdNotificationCountPositionTestComponent {

  positionX: TdNotificationCountPositionX | string;
  positionY: TdNotificationCountPositionY | string;
  notifications: any;

}

@Component({
  selector: 'td-notification-count-position-content-test',
  template: `
  <td-notification-count [positionX]="positionX" [positionY]="positionY" [notifications]="notifications">
    <mat-icon>notifications</mat-icon>
  </td-notification-count>
  `,
})
class TdNotificationCountPositionContentTestComponent {

  positionX: TdNotificationCountPositionX | string;
  positionY: TdNotificationCountPositionY | string;
  notifications: any;

}
