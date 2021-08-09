import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-nav-list',
  styleUrls: ['./nav-list.component.scss'],
  templateUrl: './nav-list.component.html',
})
export class NavListComponent {
  routes: object[] = [
    {
      icon: 'home',
      route: '.',
      title: 'Home',
    },
    {
      icon: 'library_books',
      route: '.',
      title: 'Documentation',
    },
    {
      icon: 'color_lens',
      route: '.',
      title: 'Style Guide',
    },
    {
      icon: 'view_quilt',
      route: '.',
      title: 'Layouts',
    },
    {
      icon: 'picture_in_picture',
      route: '.',
      title: 'Components & Addons',
    },
  ];
  usermenu: object[] = [
    {
      icon: 'swap_horiz',
      route: '.',
      title: 'Switch account',
    },
    {
      icon: 'tune',
      route: '.',
      title: 'Account settings',
    },
    {
      icon: 'exit_to_app',
      route: '.',
      title: 'Sign out',
    },
  ];
  navmenu: object[] = [
    {
      icon: 'looks_one',
      route: '.',
      title: 'First item',
      description: 'Item description',
    },
    {
      icon: 'looks_two',
      route: '.',
      title: 'Second item',
      description: 'Item description',
    },
    {
      icon: 'looks_3',
      route: '.',
      title: 'Third item',
      description: 'Item description',
    },
    {
      icon: 'looks_4',
      route: '.',
      title: 'Fourth item',
      description: 'Item description',
    },
    {
      icon: 'looks_5',
      route: '.',
      title: 'Fifth item',
      description: 'Item description',
    },
  ];
  navListMinHtml: string = `
    <td-layout-nav-list logo="assets:teradata" toolbarTitle="Covalent" navigationRoute="/" opened="true" mode="side">
      <div td-sidenav-content>
        Sidenav content here
      </div>
      Content goes here
    </td-layout-nav-list>
  `;
  navListBasicHtml: string = `
    <td-layout>
      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com">
        <mat-nav-list>
          <a mat-list-item><mat-icon>home</mat-icon>Home</a>
        </mat-nav-list>
        <div td-navigation-drawer-menu>
          <mat-nav-list>
            <a mat-list-item><mat-icon>account_box</mat-icon>Profile</a>
          </mat-nav-list>
        </div>
      </td-navigation-drawer>
      <td-layout-nav-list logo="assets:teradata" toolbarTitle="Covalent" navigationRoute="/" opened="true" mode="side">
        <button mat-icon-button td-menu-button tdLayoutToggle>
          <mat-icon>menu</mat-icon>
        </button>
        <div td-sidenav-content>
          Sidenav content here
        </div>
        <div td-toolbar-content>
          <button mat-button tdLayoutNavListToggle> Toggle </button>
        </div>
        Content goes here
      </td-layout-nav-list>
    </td-layout>
  `;
  navListFullHtml: string = `
    <td-layout> 
      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com">
        <mat-nav-list>
          <a *ngFor="let item of routes" mat-list-item><mat-icon>{ {item.icon} }</mat-icon>{ {item.title} }</a>
        </mat-nav-list>
        <div td-navigation-drawer-menu>
          <mat-nav-list>
            <a *ngFor="let item of usermenu" mat-list-item><mat-icon>{{ item.icon }}</mat-icon>{{ item.title }}</a>
          </mat-nav-list>
        </div>
      </td-navigation-drawer>
      <td-layout-nav-list #navList >
        <div td-sidenav-toolbar-content layout="row" layout-align="start center">
          <button mat-icon-button tdLayoutToggle>
            <mat-icon>menu</mat-icon>
          </button> 
          <mat-icon [routerLink]="['/']" class="mat-icon-logo cursor-pointer" svgIcon="assets:teradata"></mat-icon>
          <span [routerLink]="['/']" class="cursor-pointer">Covalent</span>
        </div>
        <div td-toolbar-content layout="row" layout-align="start center" flex>
          <button mat-icon-button tdLayoutNavListOpen [hideWhenOpened]="true">
            <mat-icon>arrow_back</mat-icon>
          </button>
          <span>Page Title</span>
          <span flex></span>
          <a mat-icon-button matTooltip="Docs" href="https://teradata.github.io/covalent/" target="_blank"><mat-icon>chrome_reader_mode</mat-icon></a>
          <a mat-icon-button matTooltip="Github" href="https://github.com/teradata/covalent" target="_blank"><mat-icon svgIcon="assets:github"></mat-icon></a>
        </div> 
        <mat-nav-list td-sidenav-content [tdLayoutNavListClose]="!media.query('gt-sm')">
          <ng-template let-item let-last="last" ngFor [ngForOf]="navmenu"> 
            <a mat-list-item>
              <mat-icon matListAvatar>{{ item.icon }}</mat-icon>
              <h3 matLine> { {item.title} } </h3> 
              <p matLine>{{ item.description }}</p>
            </a> 
            <mat-divider [inset]="true" *ngIf="!last"></mat-divider>
          </ng-template>
        </mat-nav-list>
        <div  >
          <mat-card>
            <mat-card-title>Main Content</mat-card-title>
            <mat-card-subtitle>content area</mat-card-subtitle>
            <mat-divider></mat-divider>
            <mat-card-content> card content </mat-card-content>
            <mat-divider></mat-divider>
            <mat-card-actions>
              <a mat-button color="accent" class="text-upper" [routerLink]="['/']">
                <span>View More</span>
              </a> 
            </mat-card-actions>
          </mat-card>
        </div>
        <td-layout-footer-inner>Optional inner footer </td-layout-footer-inner>
        <td-layout-footer>
          <div layout="row" layout-align="start center">
            <span class="mat-caption">Copyright &copy; 2017 Teradata. All rights reserved</span>
          </div>
        </td-layout-footer>
      </td-layout-nav-list>
    </td-layout>
  `;
  navListFullTypescript: string = `
    import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';
    @Component({
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'layouts-nav-list',
      styleUrls: ['./nav-list.component.scss'],
      templateUrl: './nav-list.component.html',
    })
    export class NavListComponent {
      routes: object[] = [
        { icon: 'home', route: '.', title: 'Home', },
        { icon: 'library_books', route: '.', title: 'Documentation', },
        { icon: 'color_lens', route: '.', title: 'Style Guide', },
        { icon: 'view_quilt', route: '.', title: 'Layouts', },
        { icon: 'picture_in_picture', route: '.', title: 'Components & Addons', },
      ];
      usermenu: object[] = [
        { icon: 'swap_horiz', route: '.', title: 'Switch account', },
        { icon: 'tune', route: '.', title: 'Account settings', },
        { icon: 'exit_to_app', route: '.', title: 'Sign out', },
      ];
      navmenu: object[] = [
        { icon: 'looks_one', route: '.', title: 'First item', description: 'Item description', },
        { icon: 'looks_two', route: '.', title: 'Second item', description: 'Item description', },
        { icon: 'looks_3', route: '.', title: 'Third item', description: 'Item description', },
        { icon: 'looks_4', route: '.', title: 'Fourth item', description: 'Item description', },
        { icon: 'looks_5', route: '.', title: 'Fifth item', description: 'Item description', },
      ];
      constructor() {}
    }
  `;

  constructor() {}
}
