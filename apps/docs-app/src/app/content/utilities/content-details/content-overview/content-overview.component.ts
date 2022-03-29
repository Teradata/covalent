import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { componentDetails } from '../../../../content/components/components';

@Component({
  selector: 'app-content-overview',
  templateUrl: './content-overview.component.html',
  styleUrls: ['./content-overview.component.scss'],
})
export class ContentOverviewComponent implements OnInit {
  contentPlaceholder: any;
  componentJson: any;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.componentJson = componentDetails;
  }

  ngOnInit(): void {
    this._route.parent.paramMap.subscribe((params: ParamMap) => {
      const component: any = this.componentJson.find(
        (e: any) => e.id === params.get('id')
      );
      if (!component) {
        this._router.navigate(['components']);
        return;
      }
    });
  }
}
