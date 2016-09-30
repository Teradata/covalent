import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "search"
})
export class TdDataTableSearchPipe implements PipeTransform {
  transform(value: any, term: string): any {
    if (!term) {
      return value;
    }

    let filter = term.toLowerCase();

    if (!filter) {
      return value;
    }

    return value.filter(item => {
      return Object.keys(item).find(key => {
        const itemValue = ('' + item[key]).toLowerCase();
        return itemValue.indexOf(filter) > -1;
      });
    });
  }
}