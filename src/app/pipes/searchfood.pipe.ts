import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfood'
})
export class SearchfoodPipe implements PipeTransform {

  transform(sfood:any[],term:string): any[] {
    return sfood.filter((m)=>m.name.toLowerCase().includes(term.toLowerCase()));
  }

}
