import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Address Book</h1>
    <app-contact-list></app-contact-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
