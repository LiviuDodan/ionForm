import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasePipe'
})
export class UppercasePipePipe implements PipeTransform {

  transform(data){
    return data[0].toUpperCase()+data.substr(1).toLowerCase();
  }

}
