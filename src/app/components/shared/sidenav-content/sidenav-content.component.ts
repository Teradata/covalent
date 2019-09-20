import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';

import { routeGroups, ICombinedRouteGroup } from '../../../utilities/route-trees';
import { TdExpansionPanelComponent } from '../../../../platform/core/expansion-panel/expansion-panel.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit, AfterViewInit {
  combinedRoutes: ICombinedRouteGroup[] = routeGroups;

  expansionPanels: any[];
  expansionRouteMap: any[];

  @ViewChildren('contentSections') contentSections: QueryList<TdExpansionPanelComponent>;

  constructor(public router: Router, private _route: ActivatedRoute, private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.expansionPanels = this.contentSections.toArray();
    this.expansionRouteMap = this.expansionPanels.map((expansionPanel: TdExpansionPanelComponent, i: number) => {
      return {
        panel: expansionPanel,
        rootRoute: this.combinedRoutes[i].rootRoute,
      };
    });

    this.expansionRouteMap.forEach((e) => this.checkRoutes(e));
    this._cdr.detectChanges();
  }

  checkRoutes(expansionRoute: any): void {
    const isMatch: boolean = this.router.isActive(expansionRoute.rootRoute, false);

    if (isMatch) {
      expansionRoute.panel.open();
      this._cdr.markForCheck();
    }
  }
}
