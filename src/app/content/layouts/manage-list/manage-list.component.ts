import { Component, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-manage-list',
  styleUrls: ['./manage-list.component.scss'],
  templateUrl: './manage-list.component.html',
})
export class ManageListComponent {
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
  managedListMinHtml: string = `
    <td-layout-manage-list opened="true" mode="side">
      <mat-toolbar td-sidenav-content></mat-toolbar>
      <div td-sidenav-content> Sidenav content here </div> 
      <mat-toolbar></mat-toolbar>
      Content goes here
    </td-layout-manage-list>
  `;
  managedListBasicHtml: string = `
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
    <td-layout-nav logo="assets:teradata" toolbarTitle="Covalent" navigationRoute="/">
      <button mat-icon-button td-menu-button tdLayoutToggle>
        <mat-icon>menu</mat-icon>
      </button>
      <td-layout-manage-list opened="true" mode="side">
        <mat-toolbar td-sidenav-content>Nav Title</mat-toolbar>
        <div td-sidenav-content>
          Sidenav content here
        </div>
        <mat-toolbar>
          <button mat-button tdLayoutManageListToggle> Toggle </button> 
          Content Title
        </mat-toolbar>
        Content goes here
      </td-layout-manage-list>
    </td-layout-nav>
  </td-layout>
  `;
  managedListFullHtml: string = `
    <td-layout>
      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com">
        <mat-nav-list>
          <a *ngFor="let item of routes" mat-list-item> <mat-icon>{{ item.icon }}</mat-icon>{{ item.title }}</a>
        </mat-nav-list>
        <div td-navigation-drawer-menu>
          <mat-nav-list>
            <a *ngFor="let item of usermenu" mat-list-item><mat-icon>{{ item.icon }}</mat-icon>{{ item.title }}</a>
          </mat-nav-list>
        </div>
      </td-navigation-drawer>
      <td-layout-nav>
        <div td-toolbar-content layout="row" layout-align="start center" flex>
          <button mat-icon-button td-menu-button tdLayoutToggle>
            <mat-icon>menu</mat-icon>
          </button>
          <mat-icon [routerLink]="['/']" class="mat-icon-logo cursor-pointer" svgIcon="assets:teradata"></mat-icon>
          <span [routerLink]="['/']" class="cursor-pointer">Covalent</span>
          <span flex></span>
          <a mat-icon-button matTooltip="Docs" href="https://teradata.github.io/covalent/" target="_blank"><mat-icon>chrome_reader_mode</mat-icon></a>
          <a mat-icon-button matTooltip="Github" href="https://github.com/teradata/covalent" target="_blank"><mat-icon svgIcon="assets:github"></mat-icon></a>
        </div>
        <td-layout-manage-list #manageList [opened]="media.registerQuery('gt-sm') | async" [mode]="(media.registerQuery('gt-sm') | async) ? 'side' : 'over'" [sidenavWidth]="(media.registerQuery('gt-xs') | async) ? '257px' : '100%'">
          <mat-toolbar td-sidenav-content>
            <span>Optional Title</span>
          </mat-toolbar>
          <mat-nav-list td-sidenav-content [tdLayoutManageListClose]="!media.query('gt-sm')">
            <ng-template let-item let-last="last" ngFor [ngForOf]="navmenu">
              <a mat-list-item> <mat-icon matListIcon>{ {item.icon} }</mat-icon> { {item.title} } </a>
            </ng-template>
          </mat-nav-list>
          <mat-toolbar>
            <div layout="row" layout-align="start center" flex>
              <button mat-icon-button tdLayoutManageListOpen [hideWhenOpened]="true">
                <mat-icon>arrow_back</mat-icon>
              </button>
              <span>Content Title</span> <span flex></span>
              <button mat-icon-button>
                <mat-icon>settings</mat-icon>
              </button>
            </div>
          </mat-toolbar>
          <div layout-gt-sm="row" tdMediaToggle="gt-xs" [mediaClasses]="['push-sm']">
            <div flex-gt-sm="60">
              <mat-card>
                <mat-card-title>Products Sales</mat-card-title>
                <mat-card-subtitle>usage stats for our products</mat-card-subtitle>
                <mat-divider></mat-divider>
                <mat-card-content> card content </mat-card-content>
                <mat-divider></mat-divider>
                <mat-card-actions>
                <a mat-button color="accent" class="text-upper" [routerLink]="['/']">
                  <span>View More</span>
                </a>
                </mat-card-actions>
              </mat-card>
              <mat-card>
                <mat-card-title>Customer Activity</mat-card-title>
                <mat-card-subtitle>Recent activity from select members</mat-card-subtitle>
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
          <div flex-gt-sm="40">
            <mat-card>
              <mat-card-title>Alerts</mat-card-title>
              <mat-card-subtitle>Items requiring attention</mat-card-subtitle>
              <mat-divider></mat-divider>
              <mat-card-content> card content </mat-card-content>
              <mat-divider></mat-divider>
              <mat-card-actions>
                <a mat-button color="accent" class="text-upper"[routerLink]="['/']"><span>View More</span> </a>
              </mat-card-actions>
            </mat-card>
            <mat-card>
              <mat-card-title>Favorites</mat-card-title>
              <mat-card-subtitle>Your favorite products</mat-card-subtitle>
              <mat-divider></mat-divider>
              <mat-card-content> card content </mat-card-content>
              <mat-divider></mat-divider>
              <mat-card-actions>
                <a mat-button color="accent" class="text-upper" [routerLink]="['/']"> <span>View More</span></a>
              </mat-card-actions>
            </mat-card>
          </div>
        </div>
        <td-layout-footer-inner> Optional inner footer </td-layout-footer-inner>
      </td-layout-manage-list>
        <td-layout-footer>
          <div layout="row" layout-align="start center"> 
            <span class="mat-caption">Copyright &copy; 2017 Teradata. All rights reserved</span>
          </div>
        </td-layout-footer>
      </td-layout-nav>
    </td-layout>
  `;
  managedListFullTypescript: string = `
    import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
    import { TdMediaService } from '@covalent/core/media'; 
    @Component({
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'layouts-manage-list',
      styleUrls: ['./manage-list.component.scss'],
      templateUrl: './manage-list.component.html',
    })
    export class ManageListComponent {
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
      constructor(public media: TdMediaService) {}
    }
  `;

  constructor(private _changeDetectorRef: ChangeDetectorRef, public media: TdMediaService) {}
}
