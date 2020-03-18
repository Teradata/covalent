import { Component, OnInit } from '@angular/core';

import { TdDataTableSortingOrder, ITdDataTableSortChangeEvent } from '@covalent/core/data-table';

@Component({
  selector: 'data-table-demo-sort',
  styleUrls: ['./data-table-demo-sort.component.scss'],
  templateUrl: './data-table-demo-sort.component.html',
  preserveWhitespaces: true,
})
export class DataTableDemoSortComponent implements OnInit {
  data: any[];
  basicData: any[];
  dateSortData: any[];
  atomicData: any[];

  sortBy: string = 'date';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  ngOnInit(): void {
    this.data = [
      {
        balance: 7454.6,
        email: 'sclutterham0@123-reg.co.uk',
        first_name: 'Sully',
        gender: 'Male',
        img: 'https://robohash.org/similiquemodiautem.bmp?size=50x50&set=set1',
        ip_address: '158.0.165.138',
        last_name: 'Clutterham',
        date: '2014-03-11T00:43:01.042Z',
      },
      {
        balance: 3561.4,
        email: 'mevason1@usatoday.com',
        first_name: 'Mateo',
        gender: 'Male',
        img: 'https://robohash.org/molestiaeadquia.bmp?size=50x50&set=set1',
        ip_address: '68.147.207.137',
        last_name: 'Evason',
        date: '2015-03-01T21:46:08.153Z',
      },
      {
        balance: 4456.3,
        email: 'lgardener2@wordpress.org',
        first_name: 'Lira',
        gender: 'Female',
        img: 'https://robohash.org/laboredolorumvelit.jpg?size=50x50&set=set1',
        ip_address: '96.85.6.31',
        last_name: 'Gardener',
        date: '2015-02-23T17:15:44.424Z',
      },
      {
        balance: 5938,
        email: 'edunckley3@instagram.com',
        first_name: 'Edvard',
        gender: 'Male',
        img: 'https://robohash.org/ullamquaedeleniti.png?size=50x50&set=set1',
        ip_address: '233.189.117.211',
        last_name: 'Dunckley',
        date: '2015-05-27T07:25:49.576Z',
      },
      {
        balance: 4241.6,
        email: 'gsouza4@squidoo.com',
        first_name: 'Gwynne',
        gender: 'Female',
        img: 'https://robohash.org/possimusrepellendusodio.png?size=50x50&set=set1',
        ip_address: '164.226.80.40',
        last_name: 'Souza',
        date: '2016-08-01T15:44:32.180Z',
      },
      {
        balance: 6558,
        email: 'sfurmedge5@furl.net',
        first_name: 'Sena',
        gender: 'Female',
        img: 'https://robohash.org/iustoillumsit.png?size=50x50&set=set1',
        ip_address: '192.214.177.38',
        last_name: 'Furmedge',
      },
      {
        balance: 3159.2,
        email: 'cdykes6@china.com.cn',
        first_name: 'Christian',
        gender: 'Male',
        img: 'https://robohash.org/exveniama.jpg?size=50x50&set=set1',
        ip_address: '147.35.25.192',
        last_name: 'Dykes',
      },
      {
        balance: 1471,
        email: 'sklagge7@dell.com',
        first_name: 'Sada',
        gender: 'Female',
        img: 'https://robohash.org/exercitationemtotamenim.jpg?size=50x50&set=set1',
        ip_address: '143.193.248.153',
        last_name: 'Klagge',
      },
      {
        balance: 9969.7,
        email: 'glewerenz8@europa.eu',
        first_name: 'Genia',
        gender: 'Female',
        img: 'https://robohash.org/enimdoloremqueut.jpg?size=50x50&set=set1',
        ip_address: '104.0.250.224',
        last_name: 'Lewerenz',
      },
      {
        balance: 7253.5,
        email: 'ddemarchi9@taobao.com',
        first_name: 'Daloris',
        gender: 'Female',
        img: 'https://robohash.org/uteaquearchitecto.jpg?size=50x50&set=set1',
        ip_address: '124.166.67.100',
        last_name: 'De Marchi',
      },
    ];
    this.basicData = this.data.slice(0, 10);
    this.dateSortData = this.data.slice(0, 5);
    this.dateSortData = this.dateSortData.map((row: any) => {
      const randomDate: Date = new Date(
        new Date(2012, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime()),
      );
      row.date = randomDate;
      return row;
    });
    this.atomicData = [].concat(this.dateSortData);
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortOrder =
      this.sortOrder === TdDataTableSortingOrder.Ascending
        ? TdDataTableSortingOrder.Descending
        : TdDataTableSortingOrder.Ascending;
    this.sortBy = sortEvent.name;
    this.filterData();
  }

  filterData(): void {
    this.atomicData = Array.from(this.atomicData); // Change the array reference to trigger OnPush
    this.atomicData.sort((a: any, b: any) => {
      let direction: number = 0;
      if (this.sortOrder === TdDataTableSortingOrder.Descending) {
        direction = 1;
      } else if (this.sortOrder === TdDataTableSortingOrder.Ascending) {
        direction = -1;
      }
      if (a[this.sortBy] < b[this.sortBy]) {
        return direction;
      } else if (a[this.sortBy] > b[this.sortBy]) {
        return -direction;
      } else {
        return direction;
      }
    });
  }
}
