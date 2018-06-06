import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Address Book</h1>
    <nav>
    <a [routerLink]="[{outlets: {bottom: ['chat']}}]">Show chat</a>
    <a [routerLink]="[{outlets: {bottom: ['help']}}]">Show help</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="bottom"></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
