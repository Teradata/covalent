import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss'],
})
export class DetailsWrapperComponent implements OnInit {
  componentArray: any[];
  component: any;
  navLinks: any = [
    {
      name: 'Overview',
      route: 'overview',
      alwaysShow: true,
    },
    {
      name: 'Api',
      route: 'api',
      alwaysShow: true,
    },
    {
      name: 'Examples',
      route: 'examples',
      alwaysShow: false,
    },
    {
      name: 'Migration',
      route: 'migration',
      alwaysShow: false,
    },
  ];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.component = this._route.snapshot.data;
    if (this.component.hideExamples) {
      this.navLinks = this.navLinks.filter((link: any) => {
        return link.route !== 'examples';
      });
    }
    if (this.component.hideOverview) {
      this.navLinks = this.navLinks.filter((link: any) => {
        return link.route !== 'overview';
      });
    }
    if (this.component.hideMigration) {
      this.navLinks = this.navLinks.filter((link: any) => {
        return link.route !== 'migration';
      });
    }
  }
}
