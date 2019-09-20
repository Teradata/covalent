import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

import { CodeEditorDemoComponent } from '../../component-demos/code-editor/code-editor.component';
import { HighlightDemoComponent } from '../../component-demos/highlight/highlight.component';
import { FlavoredMarkdownDemoComponent } from '../../component-demos/flavored-markdown/flavored-markdown.component';
import { MarkdownDemoComponent } from '../../component-demos/markdown/markdown.component';
import { ChipsDemoComponent } from '../../component-demos/chips/chips.component';
import { DynamicFormsDemoComponent } from '../../component-demos/dynamic-forms/dynamic-forms.component';
import { TabSelectDemoComponent } from '../../component-demos/tab-select/tab-select.component';
import { MessageDemoComponent } from '../../component-demos/message/message.component';
import { FileInputDemoComponent } from '../../component-demos/file-input/file-input.component';
import { SearchDemoComponent } from '../../component-demos/search/search.component';
import { LoadingDemoComponent } from '../../component-demos/loading/loading.component';
import { JsonFormatterDemoComponent } from '../../component-demos/json-formatter/json-formatter.component';

import { BreadcrumbDemoComponent } from '../../component-demos/breadcrumbs/breadcrumbs.component';
import { HelpDemoComponent } from 'app/components/components/component-demos/help/help.component';
import { SidesheetDemoComponent } from 'app/components/components/component-demos/sidesheet/sidesheet.component';
import { DialogsDemoComponent } from 'app/components/components/component-demos/dialogs/dialogs.component';
import { componentDetails } from 'app/utilities/components';

const componentsToMap: any = [
  ['breadcrumbs', BreadcrumbDemoComponent],
  ['sidesheet', SidesheetDemoComponent],
  ['help', HelpDemoComponent],
  ['json-formatter', JsonFormatterDemoComponent],
  ['loading', LoadingDemoComponent],
  ['search', SearchDemoComponent],
  ['file-input', FileInputDemoComponent],
  ['messages-alerts', MessageDemoComponent],
  ['tab-select', TabSelectDemoComponent],
  ['simple-dialogs', DialogsDemoComponent],
  ['dynamic-forms', DynamicFormsDemoComponent],
  ['chips-autocomplete', ChipsDemoComponent],
  ['markdown-parser', MarkdownDemoComponent],
  ['flavored-markdown-parser', FlavoredMarkdownDemoComponent],
  ['syntax-highlight', HighlightDemoComponent],
  ['code-editor', CodeEditorDemoComponent],
  ['markdown-editor', MarkdownDemoComponent],
];
const componentMap: Map<any, any> = new Map(componentsToMap);

import('../../component-demos/component-demos.module').then((m) => {
  console.log(m);
  return m.ComponentDemosModule;
});

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

      this.contentPlaceholder = new ComponentPortal(componentMap.get(component.id));
    });
  }
}
