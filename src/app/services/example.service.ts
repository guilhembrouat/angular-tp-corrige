import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  findFoo(values: string[]): number | false {
    const index = (values || []).indexOf('foo');
    if (index === -1) return false;
    return index;
  }
  
}
