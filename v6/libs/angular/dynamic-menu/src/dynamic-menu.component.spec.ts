import {
  TestBed,
  inject,
  waitForAsync,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentDynamicMenuModule } from './dynamic-menu.module';
import { IMenuTrigger, IMenuItem } from './dynamic-menu.menu';
import { By, DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Component: DynamicMenu', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TdDynamicMenuBasicTestComponent],
        imports: [
          NoopAnimationsModule,
          CovalentDynamicMenuModule,
          HttpClientTestingModule,
        ],
      });
      TestBed.compileComponents();
    })
  );

  it(
    'should show menu and submenu appropriately',
    waitForAsync(
      inject(
        [MatIconRegistry, DomSanitizer],
        (iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) => {
          const fixture: ComponentFixture<any> = TestBed.createComponent(
            TdDynamicMenuBasicTestComponent
          );
          const component: TdDynamicMenuBasicTestComponent =
            fixture.debugElement.componentInstance;
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

          iconRegistry.addSvgIconInNamespace(
            'assets',
            'angular',
            domSanitizer.bypassSecurityTrustResourceUrl(
              'assets/icons/angular.svg'
            )
          );

          iconRegistry.addSvgIconInNamespace(
            'assets',
            'covalent',
            domSanitizer.bypassSecurityTrustResourceUrl(
              'assets/icons/covalent.svg'
            )
          );

          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(
              fixture.debugElement.query(By.css('#triggerbutton'))
            ).toBeTruthy();
            expect(
              fixture.debugElement.query(By.css('#covalentlinkstrigger'))
            ).toBeFalsy();
            expect(
              fixture.debugElement.query(By.css('#quickstartlink'))
            ).toBeFalsy();

            fixture.debugElement
              .query(By.css('#triggerbutton'))
              .triggerEventHandler('click', new Event('click'));
            expect(
              fixture.debugElement.query(By.css('#covalentlinkstrigger'))
            ).toBeTruthy();
            expect(
              fixture.debugElement.query(By.css('#quickstartlink'))
            ).toBeFalsy();

            fixture.debugElement
              .query(By.css('#covalentlinkstrigger'))
              .triggerEventHandler('click', new Event('click'));
            expect(
              fixture.debugElement.query(By.css('#quickstartlink'))
            ).toBeTruthy();
          });
        }
      )
    )
  );
});

@Component({
  selector: 'td-dynamic-menu-basic-test',
  template: `
    <td-dynamic-menu [trigger]="trigger" [items]="items"></td-dynamic-menu>
  `,
})
class TdDynamicMenuBasicTestComponent {
  trigger!: IMenuTrigger;
  items!: IMenuItem[];
}
