import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value: number): number {
    let ret = 1;
    for(let i=1;i <= value; i++){
      ret *= i;
    }
    return ret;
  }

}
