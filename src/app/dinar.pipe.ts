import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dinar'
})
export class DinarPipe implements PipeTransform {

  transform(prix:number): any {
    return prix +'DT';
  }

}
