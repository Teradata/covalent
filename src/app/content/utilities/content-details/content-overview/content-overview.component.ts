import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { componentDetails } from 'app/content/components/components';

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

  ngOnInit() {
    this._route.parent.paramMap.subscribe((params: any) => {
      const component: any = this.componentJson.find((e) => e.id === params.get('id'));
      if (!component) {
        this._router.navigate(['components']);
        return;
      }

      // this.contentPlaceholder = new ComponentPortal(componentMap.get(component.id));
    });
  }
}
