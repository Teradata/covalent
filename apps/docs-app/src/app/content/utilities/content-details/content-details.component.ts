import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { componentDetails } from '../../components/components';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss'],
})
export class ContentDetailsComponent implements OnInit, OnDestroy {
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

  private _destroy$ = new Subject<void>();

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.componentArray = componentDetails;
  }

  ngOnInit(): void {
    this._route.paramMap
      .pipe(takeUntil(this._destroy$))
      .subscribe((params: ParamMap) => {
        const componentMatch: any = this.componentArray.find(
          (e: any) => e.id === params.get('id')
        );
        if (componentMatch) {
          this.component = componentMatch;
        } else {
          this._router.navigate(['../']);
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
