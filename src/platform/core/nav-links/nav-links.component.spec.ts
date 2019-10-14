import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ChangeDetectorRef, DebugElement } from '@angular/core';

import { TdNavLinksComponent } from './nav-links.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

// tslint:disable-next-line: no-big-function
describe('TdNavLinksComponent', () => {
  let component: TdNavLinksComponent;
  let fixture: ComponentFixture<TdNavLinksComponent>;
  let changeDetectorRef: ChangeDetectorRef;
  let id: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterTestingModule,
        NoopAnimationsModule,
        CovalentExpansionPanelModule,
        MatIconModule,
        MatListModule,
      ],
      declarations: [TdNavLinksComponent],
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(TdNavLinksComponent);
    component = fixture.componentInstance;
    id = fixture.componentInstance.id;
    changeDetectorRef = fixture.debugElement.injector.get(ChangeDetectorRef);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 1 href link', async () => {
    component.links = [
      {
        links: [
          {
            // tslint:disable-next-line: no-duplicate-string
            label: 'Duck Duck Go',
            // tslint:disable-next-line: no-duplicate-string
            linkTo: { href: 'https://duckduckgo.com/' },
          },
        ],
      },
    ];
    changeDetectorRef.detectChanges();
    await fixture.whenStable();

    // tslint:disable-next-line: no-duplicate-string
    const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
    // tslint:disable-next-line: no-duplicate-string
    const hrefLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0-0'));
    expect((<HTMLElement>hrefLink.nativeElement).hasAttribute('href')).toBeTruthy();
    expect((<HTMLElement>hrefLink.nativeElement).hasAttribute('ng-reflect-router-link')).toBeFalsy();
    expect(navLinks.length).toBe(1);
    expect(hrefLink).toBeTruthy();
  });

  it('should display 1 router link', async () => {
    component.links = [
      {
        links: [
          {
            label: 'Duck Duck Go',
            linkTo: { routerLink: 'https://duckduckgo.com/' },
          },
        ],
      },
    ];

    changeDetectorRef.detectChanges();
    await fixture.whenStable();

    const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
    const routerLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0-0'));
    expect((<HTMLElement>routerLink.nativeElement).hasAttribute('href')).toBeTruthy();
    expect((<HTMLElement>routerLink.nativeElement).hasAttribute('ng-reflect-router-link')).toBeTruthy();
    expect(navLinks.length).toBe(1);
    expect(routerLink).toBeTruthy();
  });

  it('should display 1 href link and 1 router link', async () => {
    component.links = [
      {
        links: [
          {
            label: 'Duck Duck Go',
            linkTo: { href: 'https://duckduckgo.com/' },
          },
          {
            label: 'Home',
            linkTo: { routerLink: ['/'] },
          },
        ],
      },
    ];

    changeDetectorRef.detectChanges();
    await fixture.whenStable();

    const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
    const hrefLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0-0'));
    const routerLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0-1'));

    expect((<HTMLElement>hrefLink.nativeElement).hasAttribute('href')).toBeTruthy();
    expect((<HTMLElement>hrefLink.nativeElement).hasAttribute('ng-reflect-router-link')).toBeFalsy();
    expect((<HTMLElement>routerLink.nativeElement).hasAttribute('href')).toBeTruthy();
    expect((<HTMLElement>routerLink.nativeElement).hasAttribute('ng-reflect-router-link')).toBeTruthy();
    expect(navLinks.length).toBe(2);
    expect(hrefLink).toBeTruthy();
    expect(routerLink).toBeTruthy();
  });

  it('should display 1 hidden href link and 1 router link', async () => {
    component.links = [
      {
        links: [
          {
            label: 'Duck Duck Go',
            linkTo: { href: 'https://duckduckgo.com/' },
            show: false,
          },
          {
            label: 'Home',
            linkTo: { routerLink: ['/'] },
          },
        ],
      },
    ];

    changeDetectorRef.detectChanges();
    await fixture.whenStable();

    const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
    const hrefLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0-0'));
    const routerLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0-1'));

    expect(navLinks.length).toBe(1);
    expect(hrefLink).toBeFalsy();
    expect(routerLink).toBeTruthy();
  });

  it('should display 1 group with 1 routelink and 1 href', async () => {
    component.links = [
      {
        name: 'Group 1 Links',
        links: [
          {
            label: 'Duck Duck Go',
            linkTo: { href: 'https://duckduckgo.com/' },
          },
          {
            label: 'Home',
            linkTo: { routerLink: ['/'] },
          },
        ],
      },
    ];

    changeDetectorRef.detectChanges();
    await fixture.whenStable();

    const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
    const navGroups: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-group'));
    const hrefLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0-0'));
    const routerLink: DebugElement = fixture.debugElement.query(By.css('#' + id + '-0-1'));

    expect(navGroups.length).toBe(1);
    expect(navLinks.length).toBe(2);
    expect(hrefLink).toBeTruthy();
    expect(routerLink).toBeTruthy();
  });

  it('should display 2 group and 4 links', async () => {
    component.links = [
      {
        name: 'Group 1 Links',
        links: [
          {
            label: 'Duck Duck Go',
            linkTo: { href: 'https://duckduckgo.com/' },
          },
          {
            label: 'Home',
            linkTo: { routerLink: ['/'] },
          },
        ],
      },
      {
        name: 'Group 2 Links',
        links: [
          {
            label: 'Duck Duck Go',
            linkTo: { href: 'https://duckduckgo.com/' },
          },
          {
            label: 'Home',
            linkTo: { routerLink: ['/'] },
          },
        ],
      },
    ];

    changeDetectorRef.detectChanges();
    await fixture.whenStable();

    const navLinks: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-link'));
    const navGroups: DebugElement[] = fixture.debugElement.queryAll(By.css('.td-nav-group'));

    expect(navGroups.length).toBe(2);

    expect(navLinks.length).toBe(4);
  });
});
