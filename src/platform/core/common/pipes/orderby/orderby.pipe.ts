import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tdOrderby',
})
export class TdOrderByPipe implements PipeTransform {
  transform(array: Object[], args: string[]): Object[] {
    if (array) {
      let [orderByValue]: string[] = args;
      let byVal: number = 1;

      if (orderByValue.charAt(0) === '!') {
        byVal = -1;
        orderByValue = orderByValue.substring(1);
      }
      array.sort((a: any, b: any) => {
        if (a[orderByValue] < b[orderByValue]) {
          return -1 * byVal;
        } else if (a[orderByValue] > b[orderByValue]) {
          return 1 * byVal;
        } else {
          return 0;
        }
      });
      return array;
    }
  }
}
