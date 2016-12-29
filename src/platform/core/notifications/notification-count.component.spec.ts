import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { CovalentNotificationsModule } from './notifications.module';
import { By } from '@angular/platform-browser';

describe('Component: NotificationCount', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdNotificationCountBasicTestComponent,
        TdNotificationCountContentTestComponent,
      ],
      imports: [
        CovalentNotificationsModule.forRoot(),
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
        expect(fixture.debugElement.query(By.css('md-icon'))).toBeTruthy();
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
    <md-icon>notifications</md-icon>
  </td-notification-count>
  `,
})
class TdNotificationCountContentTestComponent {}
