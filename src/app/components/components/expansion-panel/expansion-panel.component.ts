import { Component } from '@angular/core';

@Component({
  selector: 'expansion-panel-demo',
  styleUrls: ['expansion-panel.component.scss'],
  templateUrl: 'expansion-panel.component.html',
})
export class ExpansionPanelDemoComponent {

  expansionAttrs: Object[] = [{
    description: 'Sets label of [TdExpansionPanelComponent] header. Defaults to "Click to expand"',
    name: 'label?',
    type: 'string',
  }, {
    description: 'Sets sublabel of [TdExpansionPanelComponent] header.',
    name: 'sublabel?',
    type: 'string',
  }, {
    description: 'Toggles [TdExpansionPanelComponent] between expand/collapse.',
    name: 'expand?',
    type: 'boolean',
  }, {
    description: `Hides icon and disables header, blocks click event and sets [TdExpansionPanelComponent]
                  to collapse if "true".`,
    name: 'disabled?',
    type: 'boolean',
  }, {
    description: 'Event emitted when [TdExpansionPanelComponent] is expanded.',
    name: 'expanded?',
    type: 'function()',
  }, {
    description: 'Event emitted when [TdExpansionPanelComponent] is collapsed.',
    name: 'collapsed?',
    type: 'function()',
  }, {
    description: `Toggle active state of [TdExpansionPanelComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
    name: 'toggle',
    type: 'function()',
  }, {
    description: `Opens [TdExpansionPanelComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
    name: 'open',
    type: 'function()',
  }, {
    description: `Closes [TdExpansionPanelComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
    name: 'close',
    type: 'function()',
  }];

  expandCollapseExpansion1Msg: string = 'No expanded/collapsed detected yet';
  expansion1: boolean = false;
  disabled: boolean = false;

  toggleExpansion1(): void {
    if (!this.disabled) {
      this.expansion1 = !this.expansion1;
    }
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  expandExpansion1Event(): void {
    this.expandCollapseExpansion1Msg = 'Expand event emitted.';
  }

  collapseExpansion1Event(): void {
    this.expandCollapseExpansion1Msg = 'Collapse event emitted.';
  }
}
