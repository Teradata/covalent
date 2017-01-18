import {Component, Inject, forwardRef} from '@angular/core';

export enum OrderBy {
  ASC = <any>'asc',
  DESC = <any>'desc',
}

export interface IHeaders {
  [key: string]: OrderBy;
}

@Component({
  selector: 'design-patterns-management-list',
  styleUrls: ['./management-list.component.scss'],
  templateUrl: './management-list.component.html',
})
export class ManagementListComponent {

  listAttrs: Object[] = [{
      'created_at': '2015-12-15T19:00:31Z',
      'name': 'On the fly analytics',
      'owner': 'Jason',
      'updated_at': '2016-12-09T19:00:31Z',
    }, {
      'created_at': '2015-11-04T19:00:31Z',
      'name': 'Change data capture for sales DB',
      'owner': 'Kyle',
      'updated_at': '2016-11-08T19:00:31Z',
    }, {
      'created_at': '2015-11-08T19:00:31Z',
      'name': 'Change data capture for MF DB',
      'owner': 'Richa',
      'updated_at': '2016-11-09T19:00:31Z',
    }, {
      'created_at': '2015-12-11T19:00:31Z',
      'name': 'Our Data Lake',
      'owner': 'Ed',
      'updated_at': '2016-12-07T19:00:31Z',
    }, {
      'created_at': '2015-11-05T19:00:31Z',
      'name': 'Nightly batched analytics',
      'owner': 'Ilsun',
      'updated_at': '2016-11-07T19:00:31Z',
    }, {
      'created_at': '2015-12-12T19:00:31Z',
      'name': 'Long term data storage',
      'owner': 'Jeremy',
      'updated_at': '2016-12-08T19:00:31Z',
    }];

  dateOptions: Object[] = ['Updated', 'Created'];
  dateFilter: string = 'Updated';
  placeholderText: string = 'Updated';
  sortKey: string = 'updated_at';
  headers: IHeaders = {
    updated_at: OrderBy.ASC,
    created_at: OrderBy.ASC,
  };

  filterDateOption(dateStr?: string): void {
    this.dateFilter = dateStr;
    this.sortKey = this.dateFilter === 'Updated' ? 'updated_at' : 'created_at';
    this.placeholderText = '';
  }

  sortBy(sortKey: string): void {
    let sortedData: Object[];
    if (this.headers[sortKey] === OrderBy.ASC) {
      this.headers[sortKey] = OrderBy.DESC;
    } else {
      this.headers[sortKey] = OrderBy.ASC;
    }
    sortedData = this.listAttrs.sort((rowA: Object, rowB: Object) => {
      let cellA: string = rowA[sortKey];
      let cellB: string = rowB[sortKey];
      let sort: number = 0;
      if (cellA < cellB) {
        sort = -1;
      } else if (cellA > cellB) {
        sort = 1;
      }
      return sort * (this.headers[sortKey] === OrderBy.DESC ? -1 : 1);
    });
    this.listAttrs = sortedData;
  }

}
