import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { echartsContentDetails } from '../echarts-content';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss'],
})
export class ContentDetailsComponent implements OnInit {
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
  ];

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.componentArray = echartsContentDetails;
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      const componentMatch: any = this.componentArray.find((e) => e.id === params.get('id'));
      if (componentMatch) {
        this.component = componentMatch;
      } else {
        this._router.navigate(['../']);
      }
    });
  }
}
