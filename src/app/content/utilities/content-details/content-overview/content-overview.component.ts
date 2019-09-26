import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

import { HelpDemoComponent } from 'app/components/components/component-demos/help/help.component';
import { SidesheetDemoComponent } from 'app/components/components/component-demos/sidesheet/sidesheet.component';
import { DialogsDemoComponent } from 'app/components/components/component-demos/dialogs/dialogs.component';
import { componentDetails } from 'app/utilities/components';

// const componentsToMap: any = [
//   ['breadcrumbs', BreadcrumbDemoComponent],
//   ['sidesheet', SidesheetDemoComponent],
//   ['help', HelpDemoComponent],
//   ['json-formatter', JsonFormatterDemoComponent],
//   ['loading', LoadingDemoComponent],
//   ['search', SearchDemoComponent],
//   ['file-input', FileInputDemoComponent],
//   ['messages-alerts', MessageDemoComponent],
//   ['tab-select', TabSelectDemoComponent],
//   ['simple-dialogs', DialogsDemoComponent],
//   ['dynamic-forms', DynamicFormsDemoComponent],
//   ['chips-autocomplete', ChipsDemoComponent],
//   ['markdown-parser', MarkdownDemoComponent],
//   ['flavored-markdown-parser', FlavoredMarkdownDemoComponent],
//   ['syntax-highlight', HighlightDemoComponent],
//   ['code-editor', CodeEditorDemoComponent],
//   ['markdown-editor', MarkdownDemoComponent],
// ];
// const componentMap: Map<any, any> = new Map(componentsToMap);

@Component({
  selector: 'app-content-overview',
  templateUrl: './content-overview.component.html',
  styleUrls: ['./content-overview.component.scss'],
})
export class ContentOverviewComponent implements OnInit {
  contentPlaceholder: any;
  componentJson: any;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.componentJson = componentDetails;
  }

  ngOnInit() {
    this._route.parent.paramMap.subscribe((params: any) => {
      const component: any = this.componentJson.find((e) => e.id === params.get('id'));
      if (!component) {
        this._router.navigate(['components']);
        return;
      }

      // this.contentPlaceholder = new ComponentPortal(componentMap.get(component.id));
    });
  }
}
