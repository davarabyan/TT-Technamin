import { Pipe, PipeTransform } from '@angular/core';
import { ICard, IFilter } from '../interfaces/main.interface';

@Pipe({
  name: 'sorting',
  pure: false
})
export class SortingPipe implements PipeTransform {

  transform(items: ICard[], args: IFilter): Array<ICard> {
    if (args.sortDir === 'asc') {
      function compare(a: any, b: any) {
        if (a[args.sortBy] < b[args.sortBy]) {
          return -1;
        }
        if (a[args.sortBy] > b[args.sortBy]) {
          return 1;
        }
        return 0;
      }
      items.sort(compare);
    } else {
      function compare(a: any, b: any) {
        if (a[args.sortBy] < b[args.sortBy]) {
          return 1;
        }
        if (a[args.sortBy] > b[args.sortBy]) {
          return -1;
        }
        return 0;
      }
      items.sort(compare);
    }
    // This one can be optimized and extended 
    return items.filter(x => (x.title.toLowerCase().includes(args.filterBy) || x.description.toLowerCase().includes(args.filterBy)));;
  }


}
