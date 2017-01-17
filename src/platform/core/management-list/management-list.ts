import { Component } from '@angular/core';

export enum OrderBy {
  ASC = <any>'asc',
  DESC = <any>'desc',
}

export interface IHeaders {
  [key: string]: OrderBy;
}

@Component({
  selector: 'td-management-list',
  templateUrl: './management-list.html',
  styleUrls: ['./management-list.scss'],
})

export class TdManagementListComponent {

  sortBy(sortKey: string, data: Object[], headers: IHeaders): Object[] {
    let sortedData: Object[];
    if (headers[sortKey] === OrderBy.ASC) {
      headers[sortKey] = OrderBy.DESC;
    } else {
      headers[sortKey] = OrderBy.ASC;
    }
    sortedData = data.sort((rowA: Object, rowB: Object) => {
      let cellA: string = rowA[sortKey];
      let cellB: string = rowB[sortKey];
      let sort: number = 0;
      if (cellA < cellB) {
        sort = -1;
      } else if (cellA > cellB) {
        sort = 1;
      }
      return sort * (headers[sortKey] === OrderBy.DESC ? -1 : 1);
    });
    return sortedData;
  }

}
