import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

import { TypesBarComponent } from '../../echarts-demos/bar/bar.component';
import { TypesLineComponent } from '../../echarts-demos/line/line.component';
import { TypesScatterComponent } from '../../echarts-demos/scatter/scatter.component';
import { TypesCombinationComponent } from '../../echarts-demos/combination/combination.component';
import { TypesTreeComponent } from '../../echarts-demos/tree/tree.component';
import { TypesTreemapComponent } from '../../echarts-demos/treemap/treemap.component';
import { TypesSankeyComponent } from '../../echarts-demos/sankey/sankey.component';
import { TypesGraphComponent } from '../../echarts-demos/graph/graph.component';
import { echartsContentDetails } from '../../echarts-content';

const componentsToMap: any = [
  ['bar', TypesBarComponent],
  ['line', TypesLineComponent],
  ['scatter', TypesScatterComponent],
  ['combination', TypesCombinationComponent],
  ['tree', TypesTreeComponent],
  ['treemap', TypesTreemapComponent],
  ['sankey', TypesSankeyComponent],
  ['graph', TypesGraphComponent],
];
const componentMap: Map<any, any> = new Map(componentsToMap);

@Component({
  selector: 'app-content-overview',
  templateUrl: './content-overview.component.html',
  styleUrls: ['./content-overview.component.scss'],
})
export class ContentOverviewComponent implements OnInit {
  contentPlaceholder: any;
  componentJson: any;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.componentJson = echartsContentDetails;
  }

  ngOnInit() {
    this._route.parent.paramMap.subscribe((params: any) => {
      const component: any = this.componentJson.find((e) => e.id === params.get('id'));
      if (!component) {
        this._router.navigate(['components']);
        return;
      }

      this.contentPlaceholder = new ComponentPortal(componentMap.get(component.id));
    });
  }
}
