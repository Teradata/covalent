import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { componentDetails } from '../../../components/components';

@Component({
  standalone: false,
  selector: 'app-content-api',
  templateUrl: './content-api.component.html',
  styleUrls: ['./content-api.component.scss'],
})
export class ContentApiComponent implements OnInit, OnDestroy {
  private _route = inject(ActivatedRoute);

  resourceUrl: string;

  componentJson: any[];

  private _destroy$ = new Subject<void>();

  constructor() {
    this.componentJson = componentDetails;
  }

  ngOnInit(): void {
    this._route.parent.paramMap
      .pipe(takeUntil(this._destroy$))
      .subscribe((params: ParamMap) => {
        this.resourceUrl = this.componentJson.find(
          (e: any) => e.id === params.get('id'),
        ).apiDocUrl;
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
