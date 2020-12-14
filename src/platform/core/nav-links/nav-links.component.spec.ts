import { waitForAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ChangeDetectorRef, DebugElement } from '@angular/core';

import { TdNavLinksComponent } from './nav-links.component';
import { CovalentNavLinksModule } from './nav-links.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

// tslint:disable-next-line: no-big-function
describe('TdNavLinksComponent', () => {
  let component: TdNavLinksComponent;
  let fixture: ComponentFixture<TdNavLinksComponent>;
  let changeDetectorRef: ChangeDetectorRef;
  let id: string;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [BrowserModule, RouterTestingModule, NoopAnimationsModule, CovalentNavLinksModule],
      }).compileComponents();
    }),
  );

  beforeEach(
    waitForAsync(async () => {
      fixture = TestBed.createComponent(TdNavLinksComponent);
      component = fixture.componentInstance;
      id = fixture.componentInstance.id;
      changeDetectorRef = fixture.debugElement.injector.get(ChangeDetectorRef);
      fixture.detectChanges();
      await fixture.whenStable();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should display 1 href link',
    waitForAsync(async () => {
      component.links = [
        {
          // tslint:disable-next-line: no-duplicate-string
          label: 'Duck Duck Go',
          // tslint:disable-next-line: no-duplicate-string
          link: { href: 'https://duckduckgo.com/' },
          icon: { name: 'apps' },
        },
      ];
      changeDetectorRef.detectChanges();
      await fixture.whenStable();

      // tslint:disable-next-line: no-duplicate-string
      const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
      // tslint:disable-next-line: no-duplicate-string
      const hrefLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0'));
      expect((<HTMLElement>hrefLink.nativeElement).hasAttribute('href')).toBeTruthy();
      expect((<HTMLElement>hrefLink.nativeElement).hasAttribute('ng-reflect-router-link')).toBeFalsy();
      expect(navLinks.length).toBe(1);
      expect(hrefLink).toBeTruthy();
    }),
  );

  it(
    'should display 1 router link',
    waitForAsync(async () => {
      component.links = [
        {
          label: 'Duck Duck Go',
          link: { routerLink: 'https://duckduckgo.com/' },
          icon: { name: 'apps' },
        },
      ];

      changeDetectorRef.detectChanges();
      await fixture.whenStable();

      const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
      const routerLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0'));
      expect((<HTMLElement>routerLink.nativeElement).hasAttribute('href')).toBeTruthy();
      expect((<HTMLElement>routerLink.nativeElement).hasAttribute('ng-reflect-router-link')).toBeTruthy();
      expect(navLinks.length).toBe(1);
      expect(routerLink).toBeTruthy();
    }),
  );

  it(
    'should display 1 href link and 1 router link',
    waitForAsync(async () => {
      component.links = [
        {
          label: 'Duck Duck Go',
          link: { href: 'https://duckduckgo.com/' },
          icon: { name: 'apps' },
        },
        {
          label: 'Home',
          link: { routerLink: ['/'] },
          icon: { name: 'apps' },
        },
      ];

      changeDetectorRef.detectChanges();
      await fixture.whenStable();

      const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
      const hrefLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0'));
      const routerLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-1'));

      expect((<HTMLElement>hrefLink.nativeElement).hasAttribute('href')).toBeTruthy();
      expect((<HTMLElement>hrefLink.nativeElement).hasAttribute('ng-reflect-router-link')).toBeFalsy();
      expect((<HTMLElement>routerLink.nativeElement).hasAttribute('href')).toBeTruthy();
      expect((<HTMLElement>routerLink.nativeElement).hasAttribute('ng-reflect-router-link')).toBeTruthy();
      expect(navLinks.length).toBe(2);
      expect(hrefLink).toBeTruthy();
      expect(routerLink).toBeTruthy();
    }),
  );

  it(
    'should display 1 hidden href link and 1 router link',
    waitForAsync(async () => {
      component.links = [
        {
          label: 'Duck Duck Go',
          link: { href: 'https://duckduckgo.com/' },
          icon: { name: 'apps' },
          show: false,
        },
        {
          label: 'Home',
          link: { routerLink: ['/'] },
          icon: { name: 'apps' },
        },
      ];

      changeDetectorRef.detectChanges();
      await fixture.whenStable();

      const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
      const hrefLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0'));
      const routerLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-1'));

      expect(navLinks.length).toBe(1);
      expect(hrefLink).toBeFalsy();
      expect(routerLink).toBeTruthy();
    }),
  );

  it(
    'should display 1 group with 1 routelink and 1 href',
    waitForAsync(async () => {
      component.links = [
        {
          label: 'Group 1 Links',
          children: [
            {
              label: 'Duck Duck Go',
              link: { href: 'https://duckduckgo.com/' },
              icon: { name: 'apps' },
            },
            {
              label: 'Home',
              link: { routerLink: ['/'] },
              icon: { name: 'apps' },
            },
          ],
        },
      ];

      changeDetectorRef.detectChanges();
      await fixture.whenStable();

      const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
      const navGroups: DebugElement[] = fixture.debugElement.queryAll(By.css('h3'));
      const hrefLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0-0'));
      const routerLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0-1'));

      expect(navGroups.length).toBe(1);
      expect(navLinks.length).toBe(2);
      expect(hrefLink).toBeTruthy();
      expect(routerLink).toBeTruthy();
    }),
  );

  it(
    'should display 2 group and 4 links',
    waitForAsync(async () => {
      component.links = [
        {
          label: 'Group 1 Links',
          children: [
            {
              label: 'Duck Duck Go',
              link: { href: 'https://duckduckgo.com/' },
              icon: { name: 'apps' },
            },
            {
              label: 'Home',
              link: { routerLink: ['/'] },
              icon: { name: 'apps' },
            },
          ],
        },
        {
          label: 'Group 2 Links',
          children: [
            {
              label: 'Duck Duck Go',
              link: { href: 'https://duckduckgo.com/' },
              icon: { name: 'apps' },
            },
            {
              label: 'Home',
              link: { routerLink: ['/'] },
              icon: { name: 'apps' },
            },
          ],
        },
      ];

      changeDetectorRef.detectChanges();
      await fixture.whenStable();

      const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
      const navGroups: DebugElement[] = fixture.debugElement.queryAll(By.css('h3'));

      expect(navGroups.length).toBe(2);

      expect(navLinks.length).toBe(4);
    }),
  );
});
