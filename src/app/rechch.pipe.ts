import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechch'
})
export class RechchPipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {
    return null;
  }

}
