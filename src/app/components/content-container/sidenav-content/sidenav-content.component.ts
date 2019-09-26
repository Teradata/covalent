import { TdExpansionPanelComponent } from 'platform/core/expansion-panel/expansion-panel.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit, AfterViewInit {
  echartsRoutes: any[] = [
    {
      name: '',
      nested: false,
      views: [
        {
          name: 'Overview',
          route: '/echarts',
          exactMatch: true,
        },
        {
          name: 'Chart',
          route: '/echarts/chart',
          exactMatch: false,
        },
      ],
    },
  ];

  componentRoutes: any[] = [
    {
      name: '',
      nested: false,
      views: [
        {
          name: 'Overview',
          route: '/components',
          exactMatch: true,
        },
      ],
    },
    {
      name: 'Layout',
      nested: false,
      views: [
        {
          name: 'JSON Formatter',
          route: '/components/json-formatter',
          exactMatch: false,
        },
        {
          name: 'Expansion Panel',
          route: '/components/expansion-panel',
          exactMatch: false,
        },
        {
          name: 'Sidesheet Content',
          route: '/components/sidesheet',
          exactMatch: false,
        },
        {
          name: 'Draggable Help',
          route: '/components/help',
          exactMatch: false,
        },
      ],
    },
    {
      name: 'Buttons & Indicators',
      nested: false,
      views: [
        {
          name: 'Dynamic Forms',
          route: '/components/dynamic-forms',
          exactMatch: false,
        },
        {
          name: 'Chips Autocomplete',
          route: '/components/chips',
          exactMatch: false,
        },
      ],
    },
    {
      name: 'Navigation',
      nested: false,
      views: [
        {
          name: 'Dynamic Forms',
          route: '/components/dynamic-forms',
          exactMatch: false,
        },
        {
          name: 'Chips Autocomplete',
          route: '/components/chips',
          exactMatch: false,
        },
      ],
    },
    {
      name: 'Dialogs',
      nested: false,
      views: [
        {
          name: 'Dynamic Forms',
          route: '/components/dynamic-forms',
          exactMatch: false,
        },
        {
          name: 'Chips Autocomplete',
          route: '/components/chips',
          exactMatch: false,
        },
      ],
    },
    {
      name: 'Forms',
      nested: false,
      views: [
        {
          name: 'Dynamic Forms',
          route: '/components/dynamic-forms',
          exactMatch: false,
        },
        {
          name: 'Chips Autocomplete',
          route: '/components/chips',
          exactMatch: false,
        },
      ],
    },
  ];

  combinedRoutes: any[] = [
    { name: 'components', routeGroups: this.componentRoutes },
    { name: 'echarts', routeGroups: this.echartsRoutes },
  ];

  @ViewChildren('contentSections') componentSections: QueryList<TdExpansionPanelComponent>;

  openedExpansionPanels: any[] = [];

  constructor(public router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const panels = this.componentSections.toArray();
    console.log(this.componentSections.toArray());

    // componentExpansion.expanded.subscribe(() => this.handleExpandedPanel('componentExpansion'));

    this.checkRoutes(this.componentRoutes, panels);
    this.checkRoutes(this.echartsRoutes, panels);
  }

  checkRoutes(routeArray: any, expansionPanels: TdExpansionPanelComponent[]): void {
    // let categoryMatch: string;
    const routeMatch: any = routeArray.some((eachSection: any) =>
      eachSection.views.some((eachItem: any) => {
        const isMatch: boolean = this.router.isActive(eachItem.route, true);

        return isMatch;
      }),
    );

    const expansionMatch = expansionPanels.filter((expansionPanel) => {
      if (this.openedExpansionPanels.indexOf(expansionPanel)) {
        return expansionPanel;
      }
    });

    console.log('expansionMatch =>>>>', expansionMatch);

    if (routeMatch && !expansionMatch) {
      // open matching expansion panel
      console.log('is matching both route and epxansion');
    }
  }

  handleExpandedPanel(expansionPanel: any): void {
    this.openedExpansionPanels.push(expansionPanel);
    console.log(this.openedExpansionPanels);
  }

  handleCollapsedPanel(expansionPanel: any): void {
    if (this.openedExpansionPanels.includes(expansionPanel)) {
      const index: number = this.openedExpansionPanels.indexOf(expansionPanel);
      this.openedExpansionPanels.splice(index, 1);
    }
    console.log(this.openedExpansionPanels);
  }
}
