import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'pipes-demo',
  styleUrls: ['./pipes.component.scss' ],
  templateUrl: './pipes.component.html',
  animations: [slideInDownAnimation],
})
export class PipesComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  public logs: Object[] = [
    {
      bytes: 72452903343,
      digits: 0.03243,
      precision: 3,
      reference: '2016-06-17T12:59:59.000Z',
      timestamp: '2016-01-29T17:59:59.000Z',
      timestampend: '2016-01-29T18:59:59.000Z',
      text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
      truncate_length: 5,
    }, {
      bytes: 32452341,
      digits: 3.975086,
      precision: 4,
      reference: new Date(2016, 4, 17),
      timestamp: '2016-06-10T17:59:59.000Z',
      timestampend: '2016-11-29T18:59:59.000Z',
      text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
      truncate_length: 10,
    }, {
      bytes: 4521903343000,
      digits: 4521,
      reference: new Date(2016, 4, 17).getTime(),
      timestamp: '2016-06-17T12:59:59.000Z',
      timestampend: '2016-06-17T13:00:00.000Z',
      text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
      truncate_length: 15,
    }, {
      bytes: '5234190486500000',
      digits: '523468.86',
      reference: 'invalid',
      timestamp: '2016-06-17T12:59:59.000Z',
      timestampend: '2016-06-18T13:00:00.000Z',
      text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
      truncate_length: 20,
    }, {
      bytes: 'Invalid Number',
      digits: 'Invalid Number',
      timestamp: '2016-06-17T12:59:59.000Z',
      timestampend: '2016-06-20T13:00:00.000Z',
      text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
      truncate_length: 25,
    }, {
      bytes: 3245234190334370000,
      digits: 3245234,
      timestamp: new Date(2016, 4, 17),
      timestampend: '2016-06-20T13:00:00.000Z',
      text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
      truncate_length: 30,
    }, {
      bytes: 3245234190334324400000,
      digits: 3245234100.6,
      timestamp: new Date(2016, 4, 17).getTime(),
      timestampend: '2016-06-20T13:00:00.000Z',
      text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
      truncate_length: 35,
    }, {
      bytes: 3245234190334300000000000,
      digits: 3245234190076.9,
      timestamp: 'invalid',
      timestampend: '2016-06-20T13:00:00.000Z',
      text_value: 'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
      truncate_length: 40,
    },
 ];
}
