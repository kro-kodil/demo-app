import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(array: Array<any> | null, searchText: string, prop: string): any {
    if (!array || !array.length) return array;
    if (!searchText) return array;
    searchText = searchText.toLowerCase();
    return array.filter((item: any) => item[prop].includes(searchText));
  }
}
