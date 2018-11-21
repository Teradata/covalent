import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
const data: any[] = [];
for (let index: number = 1; index <= 1200; index++) {
  data.push({index: index, name: 'element-' + index});
}

@Injectable()
export class InfiniteService {
  get({ page, perPage = 10 }: { page: number, perPage?: number }): Observable<any[]> {
    const results: any[] = data.slice(page * perPage, (page + 1) * perPage);
    return of(results).pipe(
      delay(1000),
    );
  }
}
