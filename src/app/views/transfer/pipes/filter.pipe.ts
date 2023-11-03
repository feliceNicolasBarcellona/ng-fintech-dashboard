import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Contact[], text: string) {
    if(text === ''){
      return items
    } else {
      return items.filter(item => {
        return item.name.toLowerCase().includes(text.toLowerCase()) ||
               item.surname.toLowerCase().includes(text.toLowerCase())
      })
    }
  }

}
