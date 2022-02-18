import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { componentDetails } from '../../../components/components';

@Component({
  selector: 'app-content-api',
  templateUrl: './content-api.component.html',
  styleUrls: ['./content-api.component.scss'],
})
export class ContentApiComponent implements OnInit {
  resourceUrl: string;

  componentJson: any[];

  constructor(private _route: ActivatedRoute) {
    this.componentJson = componentDetails;
  }

  ngOnInit(): void {
    this._route.parent.paramMap.subscribe((params: ParamMap) => {
      this.resourceUrl = this.componentJson.find(
        (e: any) => e.id === params.get('id')
      ).apiDocUrl;
    });
  }
}
