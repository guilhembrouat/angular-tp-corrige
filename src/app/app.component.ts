import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Address Book</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
