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
        'level': 'One level',
        'nested': {
          'value': 2,
          'level': 'Two levels',
          'nested': {
            'value' : 88,
            'level' : 'Three levels'
          }
        }
      },
      'predicted': {
        'value': 10,
        'level': 'One Level',
        'nested': {
          'value': 8,
          'level': 'Two Levels',
        'nested':
        {
          'value': 10,
          'level': 'Three levels',
          'nested': {
            'value' : 2,
            'level' : 'Four levels'
          }
        }}
      }
    },
    { "value": 34,
      'score': {
        'value': 23,
        'level': 'One level',
        'nested': {
          'value': 1,
          'level': 'Two levels',
          'nested': {
            'value' : 3,
            'level': 'Three levels'
          }
        }
      },
      'predicted': {
        'value': 45,
        'level': 'One Level',
        'nested': {
          'value': 4,
          'level': 'Two levels',
        'nested':
        {
          'value': 6,
          'level': 'Three levels',
          'nested': {
            'value' : 75,
            'level' : 'Four levels'
          }
        }}
      }
    },
        {
      "value": 55,
      'score': {
        'value': 10,
        'level': 'One level',
        'nested': {
          'value': 4,
          'level': 'Two levels',
            'nested': {
            'value' : 20,
            'level': 'Three levels'
          }
        }
      },
      'predicted': {
        'value': 22,
        'level': 'One Level',
        'nested': {
          'value': 13,
          'level': 'Two Levels',
        'nested':
        {
          'value': 96,
          'level': 'Three levels',
          'nested': {
            'value' : 14,
            'level' : 'Four levels'
          }
        }}
      }
    },
    {
      "value": 34,
      'score': {
        'value': 6,
        'level': 'One level',
        'nested': {
          'value': 89,
          'level': 'Two levels',
            'nested': {
            'value' : 44,
            'level': 'Three levels'
          }
        }
      },
      'predicted': {
        'value': 12,
        'level': 'One Level',
        'nested': {
          'value': 3,
          'level': 'Two Levels',
          'nested':
        {
          'value': 26,
          'level': 'Three levels',
          'nested': {
            'value' : 1,
            'level' : 'Four levels'
          }
        }}
      }
    }
  ];