import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'powerbi-demo-basic',
  templateUrl: './powerbi-demo-basic.component.html',
  styleUrls: ['./powerbi-demo-basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class PowerBIDemoBasicComponent implements OnInit {
  embedUrl: string;
  accessToken: string;
  reportId: string;
  viz: any;

  settings: any = {
    navContentPaneEnabled: true,
    filterPaneEnabled: true,
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.forEach((data: any) => {
      if (data.tokenData) {
        this.embedUrl = data.tokenData.embedUrl;
        this.accessToken = data.tokenData.accessToken;
        this.reportId = data.tokenData.id;
      }
    });
  }

  onVizLoaded(viz: any): void {
    this.viz = viz;
  }
}
