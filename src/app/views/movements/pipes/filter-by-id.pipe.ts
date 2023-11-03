import { Pipe, PipeTransform } from '@angular/core';
import { Movement } from 'src/app/models/movement';

@Pipe({
  name: 'filterById'
})
export class FilterByIdPipe implements PipeTransform {

  transform(items: Movement[], id: string): any[] {
    if(!items || !id){
      return items
    }
    const filteredItems = items.filter(item => item.cardId === id);
    return filteredItems
  }

}
