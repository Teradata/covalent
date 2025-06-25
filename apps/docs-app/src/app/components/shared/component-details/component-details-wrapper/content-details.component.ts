import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss'],
})
export class DetailsWrapperComponent implements OnInit {
  private _route = inject(ActivatedRoute);

  componentArray!: any[];
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

  ngOnInit(): void {
    this.component = this._route.snapshot.data;
    if (!this.component.showExamples) {
      this.navLinks = this.navLinks.filter((link: any) => {
        return link.route !== 'examples';
      });
    }
    if (!this.component.showAPI) {
      this.navLinks = this.navLinks.filter((link: any) => {
        return link.route !== 'api';
      });
    }
    if (!this.component.showOverview) {
      this.navLinks = this.navLinks.filter((link: any) => {
        return link.route !== 'overview';
      });
    }
    if (!this.component.showMigration) {
      this.navLinks = this.navLinks.filter((link: any) => {
        return link.route !== 'migration';
      });
    }
  }
}
