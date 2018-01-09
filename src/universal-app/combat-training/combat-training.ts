import { Component, NgModule, OnInit } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// import your components here for combat-training and see if they can survive the battle

import { CovalentPagingModule } from '@covalent/core/paging';
import { CovalentVirtualScrollModule } from '@covalent/core/virtual-scroll';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { CovalentCommonModule, TdFadeInOutAnimation } from '@covalent/core/common';
import { CovalentMessageModule } from '@covalent/core/message';

// import {
//   CovalentChipsModule,
//   CovalentDataTableModule,
//   ITdDataTableColumn,
//   CovalentDialogsModule,
//   CovalentExpansionPanelModule,
//   CovalentFileModule,
//   CovalentJsonFormatterModule,
//   CovalentLayoutModule,
//   CovalentLoadingModule,
// } from '@covalent/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// The issue is that anytime i import anything from @angular/material i always get the Illegal issue, need to figure out why that is happening there.
// when i remove rootDir config from the tsconfig-battle-zone.json it works but it produces an odd output in the dist/universal/core/paging

/**
 * This component is used to test whether or if the supplied Covalent components can be
 * rendered server side. If not then a diagnostic error will let us know what needs to be
 * fixed inorder to make them server side compatible.
 *
 * Use `npm run combat-training` to run the server side rendering diagnostic script.
 */
@Component({
  selector: 'combat-training',
  templateUrl: './combat-training.html',
  styleUrls: ['./combat-training.css'],
  animations: [
    TdFadeInOutAnimation(), // using implicit anchor name 'tdFadeInOut' in template
  ],
})
export class CombatTrainingComponent implements OnInit {
  data: any[] = [
    {index: 0, name: 'element-0' },
    {index: 1, name: 'element-1' },
    {index: 2, name: 'element-2' },
    {index: 3, name: 'element-3' },
  ];

  testDigit: number = 3.975086;

  triggerState: boolean = false;

  // strings: string[] = [
  //   'stepper',
  //   'expansion-panel',
  //   'markdown',
  //   'highlight',
  //   'loading',
  //   'media',
  //   'chips',
  //   'http',
  //   'json-formatter',
  //   'pipes',
  //   'need more?',
  // ];

  // filteredStrings: string[];
  // stringsModel: string[] = this.strings.slice(0, 6);

  // filterStrings(value: string): void {
  //   this.filteredStrings = this.strings.filter((item: any) => {
  //     if (value) {
  //       return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
  //     } else {
  //       return false;
  //     }
  //   }).filter((filteredItem: any) => {
  //     return this.stringsModel ? this.stringsModel.indexOf(filteredItem) < 0 : true;
  //   });
  // }

  // configWidthColumns: ITdDataTableColumn[] = [
  //   { name: 'first_name',  label: 'First name', width: 150 },
  //   { name: 'last_name', label: 'Last name', width: { min: 150, max: 250 }},
  //   { name: 'gender', label: 'Gender'},
  //   { name: 'email', label: 'Email', width: 250},
  //   { name: 'img', label: '', width: 100},
  // ];

  // basicData: any[] = [
  //   {
  //     "balance": 7454.6,
  //     "email": "sclutterham0@123-reg.co.uk",
  //     "first_name": "Sully",
  //     "gender": "Male",
  //     "img": "https://robohash.org/similiquemodiautem.bmp?size=50x50&set=set1",
  //     "ip_address": "158.0.165.138",
  //     "last_name": "Clutterham"
  //   },
  // ];

  // files: File | FileList;
  // file: File;

  // object: any = {
  //   property: 'value',
  //   array: [1, 2, 3]
  // };

  ngOnInit(): void {
    // this.filterStrings('');
  }
}

/**
 * Client side module
 */
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'combat-training' }),
    CommonModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,

    // Add additional Covalent components here and within the template
    CovalentPagingModule,
    CovalentVirtualScrollModule,
    CovalentNotificationsModule,

    CovalentCommonModule,
    CovalentMessageModule,
    // CovalentChipsModule,
    // CovalentDataTableModule,
    // CovalentDialogsModule,
    // CovalentExpansionPanelModule,
    // CovalentFileModule,
    // CovalentJsonFormatterModule,
    // CovalentLayoutModule,
    // CovalentLoadingModule,
  ],
  bootstrap: [CombatTrainingComponent],
  declarations: [CombatTrainingComponent],
})
export class CombatTrainingClientModule { }

/**
 * Server side module
 */
@NgModule({
  imports: [CombatTrainingClientModule, ServerModule],
  bootstrap: [CombatTrainingComponent],
})
export class CombatTrainingServerModule { }
