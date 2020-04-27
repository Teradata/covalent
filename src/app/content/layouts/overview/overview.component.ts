import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'layouts-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
})
export class LayoutsOverviewComponent {
  items: object[] = [
    {
      description: 'A top toolbar only. Best for dashboards with no in-page navigation. A blank canvas.',
      icon: 'view_compact',
      route: 'nav-view',
      title: 'Nav View',
    },
    {
      description: 'Persistent left nav for category views, documentation or browsing lists.',
      icon: 'view_quilt',
      route: 'nav-list',
      title: 'Nav List',
    },
    {
      description: 'Used on this page, recommended for detail views, forms and blog posts.',
      icon: 'view_day',
      route: 'card-over',
      title: 'Card Over',
    },
    {
      description: 'Best for admin & management list views or sub-dashboards with their own left nav.',
      icon: 'view_list',
      route: 'manage-list',
      title: 'Management List',
    },
  ];
  rwdHorizontalRowHtml: string = `
    <div layout="row">
      <div flex>child</div>
      <div flex>child</div>
      <div flex>child</div>
    </div>
  `;
  rwdVerticalColumnHtml: string = `
    <div layout="column">
      <div flex>child</div>
      <div flex>child</div>
      <div flex>child</div>
    </div>
  `;
  rwdMarginHtml: string = `
    <div layout="row" layout-margin>
      <div flex>child</div>
      <div flex>child</div>
      <div flex>child</div>
    </div>
  `;
  rwdPaddingHtml: string = `
    <div layout="row" layout-padding>
      <div flex>child</div>
      <div flex>child</div>
      <div flex>child</div>
    </div>
  `;
  rwd4030Html: string = `
    <div layout="row" layout-padding>
      <div flex="40">child</div>
      <div flex>child</div>
      <div flex="30">child</div>
    </div>
  `;
  rwdWidthHtml: string = `
    <div layout="row" layout-padding>
      <div flex-gt-xs="40" flex-md="50">child</div>
      <div flex>child</div>
      <div flex-gt-xs="30" flex-md="20" flex-lg="10">child</div>
    </div>
  `;
  rwdXsHtml: string = `
    <div layout-gt-xs="row">
      <div flex-gt-xs="60">child</div>
      <div flex-gt-xs="40">child</div>
    </div>
  `;
}
