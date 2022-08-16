import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { componentDetails } from '../../../components/components';

@Component({
  selector: 'app-content-api',
  templateUrl: './content-api.component.html',
  styleUrls: ['./content-api.component.scss'],
})
export class ContentApiComponent implements OnInit, OnDestroy {
  resourceUrl: string;

  componentJson: any[];

  private _destroy$ = new Subject<void>();

  constructor(private _route: ActivatedRoute) {
    this.componentJson = componentDetails;
  }

  ngOnInit(): void {
    this._route.parent.paramMap
      .pipe(takeUntil(this._destroy$))
      .subscribe((params: ParamMap) => {
        this.resourceUrl = this.componentJson.find(
          (e: any) => e.id === params.get('id')
        ).apiDocUrl;
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
