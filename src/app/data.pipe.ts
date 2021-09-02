import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataPipe'
})
export class DataPipe implements PipeTransform {

  transform(value: any): any {
    let data;
    for (var key in value){
         data = `${key} : ${value[key]}`;
      }
    return data;

  }

}
