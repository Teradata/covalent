import {
  TestBed,
  ComponentFixture,
} from '@angular/core/testing';
import { Injectable, Provider, SkipSelf, Optional } from '@angular/core';
import { TdDataTableSortingOrder, ITdDataTableColumn } from '../data-table.component';
import { TdDataTableService } from './data-table.service';

describe('Service: TdDataTableService', () => {
    let service: TdDataTableService;

  beforeEach(() => {
      TestBed.configureTestingModule({
      providers: [TdDataTableService],
      });
    service = TestBed.get(TdDataTableService);
});
  it('should create an instances of TdDataTableService', () => {
      expect(service).toBeDefined();
  });
  it('should sort data a by nested value', () => {
      let d = service.sortData(nestedDataExample, 'score.nested.value',  TdDataTableSortingOrder.Descending);
      expect(d[0].score.nested.value).toBe(89);
  });
  it('should sort data a non-nested value', () => {
      let d = service.sortData(nestedDataExample, 'value',  TdDataTableSortingOrder.Ascending);
      expect(d[0].value).toBe(34);
  });
});

 let nestedDataExample = [
    { "value": 78,
      'score': {
        'value': 8,
        'level': 'First level',
        'nested': {
          'value': 2,
          'level': 'Second level',
          'nested': {
            'value' : 88,
            'level' : 'Third level'
          }
        }
      },
      'predicted': {
        'value': 10,
        'level': 'First Level',
        'nested': {
          'value': 8,
          'level': 'Second Level',
        'nested':
        {
          'value': 10,
          'level': 'Third level',
          'nested': {
            'value' : 2,
            'level' : 'Fourth level'
          }
        }}
      }
    },
    { "value": 34,
      'score': {
        'value': 23,
        'level': 'First level',
        'nested': {
          'value': 1,
          'level': 'Second level',
          'nested': {
            'value' : 3,
            'level': 'Third level'
          }
        }
      },
      'predicted': {
        'value': 45,
        'level': 'First Level',
        'nested': {
          'value': 4,
          'level': 'Second level',
        'nested':
        {
          'value': 6,
          'level': 'Third level',
          'nested': {
            'value' : 75,
            'level' : 'Fourth level'
          }
        }}
      }
    },
        {
      "value": 55,
      'score': {
        'value': 10,
        'level': 'First level',
        'nested': {
          'value': 4,
          'level': 'Second level',
            'nested': {
            'value' : 20,
            'level': 'Third level'
          }
        }
      },
      'predicted': {
        'value': 22,
        'level': 'First Level',
        'nested': {
          'value': 13,
          'level': 'Second Level',
        'nested':
        {
          'value': 96,
          'level': 'Third level',
          'nested': {
            'value' : 14,
            'level' : 'Fourth level'
          }
        }}
      }
    },
    {
      "value": 34,
      'score': {
        'value': 6,
        'level': 'First level',
        'nested': {
          'value': 89,
          'level': 'Second levels',
            'nested': {
            'value' : 44,
            'level': 'Third levels'
          }
        }
      },
      'predicted': {
        'value': 12,
        'level': 'First Level',
        'nested': {
          'value': 3,
          'level': 'Second Level',
          'nested':
        {
          'value': 26,
          'level': 'Third level',
          'nested': {
            'value' : 1,
            'level' : 'Fourth level'
          }
        }}
      }
    }
  ];