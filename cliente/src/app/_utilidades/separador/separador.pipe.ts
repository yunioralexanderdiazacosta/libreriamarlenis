import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separador'
})
export class SeparadorPipe implements PipeTransform {

	transform(value: any, args?: any): any {
  		return new Intl.NumberFormat("de-DE").format(value);
  	}

}
