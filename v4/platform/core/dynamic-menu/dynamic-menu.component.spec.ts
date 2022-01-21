import { TestBed, inject, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentDynamicMenuModule, TdDynamicMenuComponent, IMenuTrigger, IMenuItem } from './';
import { By } from '@angular/platform-browser';

describe('Component: DynamicMenu', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TdDynamicMenuBasicTestComponent],
        imports: [NoopAnimationsModule, CovalentDynamicMenuModule],
      });
      TestBed.compileComponents();
    }),
  );

  it(
    'should show menu and submenu appropriately',
    waitForAsync(
      inject([], () => {
        const fixture: ComponentFixture<any> = TestBed.createComponent(TdDynamicMenuBasicTestComponent);
        const component: TdDynamicMenuBasicTestComponent = fixture.debugElement.componentInstance;
        component.trigger = {
          id: 'triggerbutton',
          icon: 'list',
          text: 'Trigger With Text And Icon',
        };
        component.items = [
          {
            id: 'covalentlinkstrigger',
            text: 'Covalent Links',
            svgIcon: 'assets:covalent',
            children: [
              {
                id: 'quickstartlink',
                text: 'Quickstart',
                icon: 'flash_on',
                link: 'https://github.com/Teradata/covalent-quickstart',
                newTab: true,
              },
              {
                id: 'electronlink',
                text: 'Electron App',
                icon: 'laptop_mac',
                link: 'https://github.com/Teradata/covalent-electron',
                newTab: true,
              },
              {
                id: 'datalink',
                text: 'Covalent Data',
                icon: 'aspect_ratio',
                link: 'https://github.com/Teradata/covalent-data',
                newTab: true,
              },
            ],
          },
          {
            id: 'angularlink',
            text: 'Angular Link',
            svgIcon: 'assets:angular',
            children: [
              {
                text: 'Angular Homepage',
                icon: 'star_rate',
                link: 'https://angular.io/',
                newTab: true,
              },
            ],
          },
        ];

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('#triggerbutton'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('#covalentlinkstrigger'))).toBeFalsy();
          expect(fixture.debugElement.query(By.css('#quickstartlink'))).toBeFalsy();

          fixture.debugElement.query(By.css('#triggerbutton')).triggerEventHandler('click', new Event('click'));
          expect(fixture.debugElement.query(By.css('#covalentlinkstrigger'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('#quickstartlink'))).toBeFalsy();

          fixture.debugElement.query(By.css('#covalentlinkstrigger')).triggerEventHandler('click', new Event('click'));
          expect(fixture.debugElement.query(By.css('#quickstartlink'))).toBeTruthy();
        });
      }),
    ),
  );
});

@Component({
  selector: 'td-dynamic-menu-basic-test',
  template: `
    <td-dynamic-menu [trigger]="trigger" [items]="items"></td-dynamic-menu>
  `,
})
class TdDynamicMenuBasicTestComponent {
  trigger: IMenuTrigger;
  items: IMenuItem[];
}
