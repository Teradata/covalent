import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-card-over',
  styleUrls: ['./card-over.component.scss'],
  templateUrl: './card-over.component.html',
})
export class CardOverComponent {
  routes: any[] = [
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
  cardlist: object[] = [
    {
      icon: 'account_box',
      route: '.',
      title: 'John Jameson',
      description: 'Owner',
    },
    {
      icon: 'description',
      route: '.',
      title: 'An item description',
      description: 'Description',
    },
    {
      icon: 'vpn_key',
      route: '.',
      title: '1141e8e8-8d24-4956-93c2',
      description: 'API Key',
    },
  ];
  carddates: object[] = [
    {
      icon: 'access_time',
      route: '.',
      date: '2017-07-07T00:25:49+00:00',
      description: 'Last Updated',
    },
    {
      icon: 'today',
      route: '.',
      date: '2017-07-04T00:25:49+00:00',
      description: 'Created',
    },
  ];
  tdLayoutMinHtml: string = `
    <td-layout-card-over cardTitle="Covalent" cardSubtitle="Card Over Layout Demo"> 
      Content goes here
    </td-layout-card-over>
  `;
  tdLayoutDrawerHtml: string = `
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
        <td-layout-card-over cardTitle="Covalent" cardSubtitle="Card Over Layout Demo">
          Content goes here
        </td-layout-card-over>
      </td-layout-nav>
    </td-layout>
  `;
  tdLayoutLinksHtml: string = `
    <td-layout>
      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com">
        <mat-nav-list> 
          <a *ngFor="let item of routes" mat-list-item><mat-icon>{ {item.icon} }</mat-icon>{ {item.title} }</a>
        </mat-nav-list> 
        <div td-navigation-drawer-menu>
          <mat-nav-list> 
            <a *ngFor="let item of usermenu" mat-list-item><mat-icon>{ {item.icon} }</mat-icon>{ {item.title} }</a>
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
        <td-layout-card-over cardWidth="75">
          <mat-card-title>Card Over Layout</mat-card-title>
          <mat-card-subtitle>A card over layout with all available options</mat-card-subtitle>
          <mat-divider></mat-divider>
          <mat-card-content>
            <mat-list>
              <h3 matSubheader>Metadata</h3>
              <ng-template let-item let-last="last" ngFor [ngForOf]="cardlist">
                <mat-list-item>
                  <mat-icon matListAvatar>{ {item.icon} }</mat-icon>
                  <h3 matLine> {{ item.title }} </h3>
                  <p matLine> {{ item.description }}</p>
                </mat-list-item>
                <mat-divider [inset]="true" *ngIf="!last"></mat-divider>
                </ng-template>
                <mat-divider></mat-divider>
                <h3 matSubheader>Dates</h3>
                <ng-template let-item let-last="last" ngFor [ngForOf]="carddates">
                <mat-list-item>
                  <mat-icon matListAvatar>{{ item.icon }}</mat-icon>
                  <h3 matLine>{{ item.date | timeAgo }}</h3>
                  <p matLine>{{ item.description }}</p>
                </mat-list-item>
                <mat-divider [inset]="true" *ngIf="!last"></mat-divider>
                </ng-template>
            </mat-list>
          </mat-card-content>
          <mat-divider></mat-divider>
          <mat-card-actions>
            <button mat-button color="accent" class="text-upper">Edit</button>
          </mat-card-actions>
        </td-layout-card-over>
      </td-layout-nav>
    </td-layout>
  `;
  tdLayoutTypescript: string = `
    import { Component, ChangeDetectionStrategy } from '@angular/core';
    @Component({
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'layouts-card-over',
      styleUrls: ['./card-over.component.scss'],
      templateUrl: './card-over.component.html',
    })
    export class CardOverComponent {
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
      cardlist: object[] = [
        { icon: 'account_box', route: '.', title: 'John Jameson', description: 'Owner', },
        { icon: 'description', route: '.', title: 'An item description', description: 'Description', },
        { icon: 'vpn_key', route: '.', title: '1141e8e8-8d24-4956-93c2', description: 'API Key', },
      ];
      carddates: object[] = [
        { icon: 'access_time', route: '.', date: '2017-07-07T00:25:49+00:00', description: 'Last Updated', },
        { icon: 'today', route: '.', date: '2017-07-04T00:25:49+00:00', description: 'Created', },
      ];
    }
  `;
}
