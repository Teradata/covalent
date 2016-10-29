import { Injectable } from '@angular/core';

import { TdDataTableSortingOrder, ITdDataTableColumn } from '../data-table.component';

import * as _ from 'lodash';

@Injectable()
export class TdDataTableService {

  filterData(data: any[], searchTerm: string, ignoreCase: boolean = false): any[] {
    let filter: string = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
    if (filter) {
      data = data.filter((item: any) => {
        const res: any = Object.keys(item).find((key: string) => {
          const preItemValue: string = ('' + item[key]);
          const itemValue: string = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
          return itemValue.indexOf(filter) > -1;
        });
        return !(typeof res === 'undefined');
      });
    }
    return data;
  }

  sortData(data: any[], sortBy: ITdDataTableColumn,
           sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending): any[] {
    if (sortBy) {
      data = _.sortBy(data, sortBy.name);
      if (sortOrder === TdDataTableSortingOrder.Descending) {
        data = _.reverse(data);
      }
    }
    return data;
  }

  pageData(data: any[], fromRow: number, toRow: number): any[] {
    if (fromRow >= 1 && toRow <= data.length) {
      data = data.slice(fromRow - 1, toRow);
    }
    return data;
  }
}
