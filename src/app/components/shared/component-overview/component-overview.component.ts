import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';

import { TdMediaService } from '@covalent/core/media';

import { slideInUpAnimation } from '../../../app.animations';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'component-overview',
  styleUrls: ['./component-overview.component.scss'],
  templateUrl: './component-overview.component.html',
  animations: [slideInUpAnimation],
})
export class ComponentOverviewComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  categoryGroups: any;
  categoryTitle: string;
  categoryDescription: string;

  constructor(public media: TdMediaService, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.data
      .pipe(
        tap((data) => (this.categoryTitle = data.category)),
        switchMap((data) => this.getCategoryPayload(data.category)),
      )
      .subscribe((data) => {
        this.categoryDescription = data.description;
        this.categoryGroups = data.components;
      });
  }

  getCategoryPayload(category): Observable<any> {
    return this.http.get<any>(`assets/${category}.json`);
  }
}
