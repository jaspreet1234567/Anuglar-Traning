import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(arr:Array<any>) {
    return arr.filter(x=>x.age % 2 ==0)
  }

}
