import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
})
export class SortPipe implements PipeTransform {
  transform(array: any, field: string, asc: boolean): any[] {
    if (!Array.isArray(array)) {
      return [];
    }
    array.sort((a: any, b: any) => {
      let res: number = 0;
      if (a[field] < b[field]) {
        res = -1;
      } else if (a[field] > b[field]) {
        res = 1;
      } else {
        res = 0;
      }

      return asc ? res : res * -1;
    });
    return array;
  }
}
