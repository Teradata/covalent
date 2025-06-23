import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { componentDetails } from '../../../../content/components/components';
import { Subject, takeUntil } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-content-overview',
  templateUrl: './content-overview.component.html',
  styleUrls: ['./content-overview.component.scss'],
})
export class ContentOverviewComponent implements OnInit, OnDestroy {
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);

  contentPlaceholder: any;
  componentJson: any;

  private _destroy$ = new Subject<void>();

  constructor() {
    this.componentJson = componentDetails;
  }

  ngOnInit(): void {
    this._route.parent.paramMap
      .pipe(takeUntil(this._destroy$))
      .subscribe((params: ParamMap) => {
        const component: any = this.componentJson.find(
          (e: any) => e.id === params.get('id'),
        );
        if (!component) {
          this._router.navigate(['components']);
          return;
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
