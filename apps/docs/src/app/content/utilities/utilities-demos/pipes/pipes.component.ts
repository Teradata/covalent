import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../../app.animations';

interface ILogConfig {
  bytes?: number;
  digits?: number;
  precision?: number;
  reference?: any;
  timestamp?: string;
  timestampend?: string;
  text_value?: string;
  truncate_length?: number;
  expiration_date?: string;
}

@Component({
  selector: 'pipes-demo',
  styleUrls: ['./pipes.component.scss'],
  templateUrl: './pipes.component.html',
  animations: [slideInUpAnimation],
})
export class PipesComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;

  currentDate: Date = new Date();
  currentTimeStamp: string = this.currentDate.toISOString();

  public logs: ILogConfig[] = [
    {
      bytes: 72452903343,
      digits: 0.03243,
      precision: 3,
      reference: '2016-06-17T12:59:59.000Z',
      timestamp: '2016-01-29T17:59:59.000Z',
      timestampend: '2016-01-29T18:59:59.000Z',
      text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
      truncate_length: 5,
    },
    {
      bytes: 32452341,
      digits: 3.975086,
      precision: 4,
      reference: new Date(2016, 4, 17),
      timestamp: '2016-06-10T17:59:59.000Z',
      timestampend: '2016-11-29T18:59:59.000Z',
      expiration_date: new Date(
        new Date(2016, 4, 17).getTime() + 120000
      ).toISOString(),
      text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
      truncate_length: 10,
    },
    {
      bytes: 4521903343000,
      digits: 4521,
      reference: new Date(2016, 4, 17).getTime(),
      timestamp: '2016-06-17T12:59:59.000Z',
      timestampend: '2016-06-17T13:00:00.000Z',
      expiration_date: new Date(
        new Date(2016, 4, 17).getTime() + 7200000
      ).toISOString(),
      text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
      truncate_length: 15,
    },
    // {
    //   bytes: '5234190486500000',
    //   digits: '523468.86',
    //   reference: 'invalid',
    //   timestamp: '2016-06-17T12:59:59.000Z',
    //   timestampend: '2016-06-18T13:00:00.000Z',
    //   expiration_date: new Date(this.currentDate.getTime() + 259200000).toISOString(),
    //   text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
    //   truncate_length: 20,
    // },
    // {
    //   bytes: 'Invalid Number',
    //   digits: 'Invalid Number',
    //   timestamp: '2016-06-17T12:59:59.000Z',
    //   timestampend: '2016-06-20T13:00:00.000Z',
    //   expiration_date: new Date(this.currentDate.getTime() + 10519200000).toISOString(),
    //   text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
    //   truncate_length: 25,
    // },
    // {
    //   bytes: 3245234190334370000,
    //   digits: 3245234,
    //   timestamp: new Date(2016, 4, 17),
    //   timestampend: '2016-06-20T13:00:00.000Z',
    //   expiration_date: new Date(this.currentDate.getTime() + 157788000000).toISOString(),
    //   text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
    //   truncate_length: 30,
    // },
    // {
    //   bytes: 3245234190334324400000,
    //   digits: 3245234100.6,
    //   timestamp: new Date(2016, 4, 17).getTime(),
    //   timestampend: '2016-06-20T13:00:00.000Z',
    //   expiration_date: new Date(this.currentDate.getTime() + 20000).toISOString(),
    //   text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
    //   truncate_length: 35,
    // },
    // {
    //   bytes: 3245234190334300000000000,
    //   digits: 3245234190076.9,
    //   timestamp: 'invalid',
    //   timestampend: '2016-06-20T13:00:00.000Z',
    //   expiration_date: new Date(this.currentDate.getTime() + 30000).toISOString(),
    //   text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
    //   truncate_length: 40,
    // },
  ];
  covalantCommonTypescript = `
    import { CovalentCommonModule } from '@covalent/core/common';
    @NgModule({
      imports: [
        CovalentCommonModule,
        ...
      ],
      ...
    })
    export class MyModule {}
  `;
  digitsHtml = `
    <mat-list>
      <mat-list-item *ngFor="let log of logs">
        <!-- original output -->
        <h3 matLine>Digits: { { log.digits } }</h3>
        <!-- output with digits pipe -->
        <p matLine>Converted: { { log.digits | digits } }</p>
        <!-- output with precision aurgument -->
        <p matLine>With precision argument: { { log.digits | digits:log.precision } } </p>
      </mat-list-item>
    </mat-list>
  `;
  bytesHtml = `
    <mat-list>
      <mat-list-item *ngFor="let log of logs">
        <!-- original output -->
        <h3 matLine>Bytes: { { log.bytes } }</h3>
        <!-- output with bytes pipe -->
        <p matLine>Converted: { { log.bytes | bytes } }</p>
        <!-- output with precision aurgument -->
        <p matLine>With precision argument: { { log.bytes | bytes:log.precision } } </p>
      </mat-list-item>
    </mat-list>
  `;
  decimalByteHtml = `
  <mat-list>
    <mat-list-item *ngFor="let log of logs">
      <!-- original output -->
      <h3 matLine>Bytes: { { log.bytes } }</h3>
      <!-- output with bytes pipe -->
      <p matLine>Converted: { { log.bytes | decimalBytes } }</p>
      <!-- output with precision aurgument -->
      <p matLine>With precision argument: { { log.bytes | decimalBytes:log.precision } } </p>
    </mat-list-item>
  </mat-list>
  `;
  timeAgoHtml = `
  <mat-list>
    <mat-list-item *ngFor="let log of logs">
      <!-- original output -->
      { { log.timestamp } } | 
      <!-- output with timeAgo pipe -->
      { { log.timestamp | timeAgo:reference } } //reference is optional
    </mat-list-item>
  </mat-list>
  `;
  timeUntilHtml = `
  <mat-list>
    <mat-list-item *ngFor="let log of logs">
      <!-- original output -->
      { { log.timestamp } } | 
      <!-- output with timeUntil pipe -->
      { { log.timestamp | timeUntil:reference } } //reference is optional
    </mat-list-item>
  </mat-list>
  `;
  timeDiffHtml = `
  <mat-list>
    <mat-list-item *ngFor="let log of logs">
      <!-- Start and end time output -->
      <h3 matLine>{ { log.timestamp } } | End Time: { { log.timestampend } }</h3>
      <!-- output with timeDifference pipe -->
      <p matLine>Difference: { { log.timestamp | timeDifference:log.timestampend } }</p>
      <!-- outputs the time difference relative to the current time -->
      <p matLine>Difference relative to current time: { { log.timestamp | timeDifference } }</p>
    </mat-list-item>
  </mat-list> 
  `;
  truncateHtml1 = `
  <mat-list>
    <mat-list-item *ngFor="let log of logs">
      <!-- original value output -->
      <h3 matLine>Original value: <code>{ { log.text_value } }</code></h3>
      <!-- truncated value output -->
      <p matLine>Truncate with a length value of <code>{ { log.truncate_length } }</code>: { { log.text_value | truncate:log.truncate_length } }</p>
    </mat-list-item>
  </mat-list>
  `;
  truncateHtml2 = `
    <!-- Both have the same output because -->
    <!-- the space is removed in the last example -->
    { { abcd abcd abcd | truncate:4 } } <!-- 'abcd…' -->
    { { abcd abcd abcd | truncate:5 } } <!-- 'abcd…' -->
  `;
}
