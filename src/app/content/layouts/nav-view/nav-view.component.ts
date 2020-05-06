import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-nav-view',
  styleUrls: ['./nav-view.component.scss'],
  templateUrl: './nav-view.component.html',
})
export class NavViewComponent {
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
  navViewMinHtml: string = `
    <td-layout-nav logo="assets:teradata" toolbarTitle="Covalent" navigationRoute="/">
      Content goes here
    </td-layout-nav>
  `;
  navViewBasicHtml: string = `
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
        Content goes here
      </td-layout-nav>
    </td-layout>
  `;
  navViewFullHtml: string = `
    <td-layout>
      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com">
        <mat-nav-list>
          <a *ngFor="let item of routes" mat-list-item><mat-icon>{ {item.icon} }</mat-icon>{ {item.title} }</a>
        </mat-nav-list>
        <div td-navigation-drawer-menu>
          <mat-nav-list>
            <a *ngFor="let item of usermenu" mat-list-item><mat-icon>{ {item.icon}}</mat-icon>{ {item.title} }</a>
          </mat-nav-list>
        </div>
      </td-navigation-drawer>
      <td-layout-nav>
      <div td-toolbar-content layout="row" layout-align="start center" flex>
        <button mat-icon-button td-menu-button tdLayoutToggle><mat-icon>menu</mat-icon></button>
        <mat-icon [routerLink]="['/']" class="mat-icon-logo cursor-pointer" svgIcon="assets:teradata"></mat-icon>
        <span [routerLink]="['/']" class="cursor-pointer">Covalent</span>
        <span flex></span>
        <a mat-icon-button matTooltip="Docs" href="https://teradata.github.io/covalent/" target="_blank"><mat-icon>chrome_reader_mode</mat-icon></a>
        <a mat-icon-button matTooltip="Github" href="https://github.com/teradata/covalent" target="_blank"><mat-icon svgIcon="assets:github"></mat-icon></a>
      </div>
      <div layout-gt-sm="row" tdMediaToggle="gt-xs" [mediaClasses]="['push-sm']">
        <div flex-gt-sm="60">
          <mat-card>
            <mat-card-title>Products Sales</mat-card-title>
            <mat-card-subtitle>usage stats for our products</mat-card-subtitle>
            <mat-divider></mat-divider>
            <mat-card-content> card content </mat-card-content>
          </mat-card>
          <mat-card>
            <mat-card-title>Customer Activity</mat-card-title>
            <mat-card-subtitle>Recent activity from select members</mat-card-subtitle> <mat-divider></mat-divider>
            <mat-card-content> card content </mat-card-content>
          </mat-card>
        </div>
          <div flex-gt-sm="40">
            <mat-card>
              <mat-card-title>Alerts</mat-card-title> <mat-card-subtitle>Items requiring attention</mat-card-subtitle>
              <mat-divider></mat-divider> <mat-card-content> card content </mat-card-content> <mat-divider></mat-divider>
              <mat-card-actions>
                <a mat-button color="accent" class="text-upper" [routerLink]="['/logs']"> <span>View More</span> </a>
              </mat-card-actions>
            </mat-card>
            <mat-card>
              <mat-card-title>Favorites</mat-card-title>
              <mat-card-subtitle>Your favorite products</mat-card-subtitle>
              <mat-divider></mat-divider>
              <mat-card-content> card content </mat-card-content>
              <mat-card-actions>
                <a mat-button color="accent" class="text-upper" [routerLink]="['/product']"> <span>View More</span> </a>
              </mat-card-actions>
            </mat-card>
          </div>
        </div>
        <td-layout-footer>
          <div layout="row" layout-align="start center">
            <span class="mat-caption">Copyright &copy; 2017 Teradata. All rights reserved</span>
          </div>
        </td-layout-footer>
      </td-layout-nav>
    </td-layout>
  `;
  navViewFullTypescript: string = `
    import { Component, ChangeDetectionStrategy } from '@angular/core';
    @Component({
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'layouts-nav-view',
      styleUrls: ['./nav-view.component.scss'],
      templateUrl: './nav-view.component.html',
    })
    export class NavViewComponent {
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
    }
  `;
}
