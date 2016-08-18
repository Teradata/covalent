import { Component } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';

import { TdChipsComponent } from '../../../../platform/chips';
import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    MdButton,
    TdChipsComponent,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-chips-demo',
  styleUrls: ['chips.component.css'],
  templateUrl: 'chips.component.html',
})
export class ChipsDemoComponent {

  chipsAttrs: Object[] = [{
    description: `Enables Autocompletion with the provided list of strings.`,
    name: 'items?',
    type: 'string[]',
  }, {
    description: `Disables the chip input and removal.`,
    name: 'readOnly?',
    type: 'boolean',
  }, {
    description: `Validates input against the provided search list before adding it to the model.
                  If it doesnt exist, it cancels the event.`,
    name: 'requireMatch?',
    type: 'boolean',
  }, {
    description: `Placeholder for the autocomplete input.`,
    name: 'placeholder?',
    type: 'string',
  }, {
    description: `Method to be executed when string is added as chip through the autocomplete.
                  Sends chip value as event.`,
    name: 'add?',
    type: 'function',
  }, {
    description: `Method to be executed when string is removed as chip with the "remove" button.
                  Sends chip value as event.`,
    name: 'remove?',
    type: 'function',
  }];

  readOnly: boolean = false;

  items: string[] = [
    'stepper',
    'expansion-panel',
    'markdown',
    'highlight',
    'loading',
    'media',
    'chips',
    'http',
    'json-formatter',
    'pipes',
    'need more?',
  ];

  itemsRequireMatch: string[] = this.items.slice(0, 6);

  itemsReadOnly: string[] = this.items.slice(2, 8);

  itemsForms: string[] = this.items.slice(6, 11);

  toggleReadOnly(): void {
    this.readOnly = !this.readOnly;
  }

}
