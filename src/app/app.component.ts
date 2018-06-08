import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <img src="assets/google.png" />
    <h1>Address Book {{envName}}</h1>
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
  envName = environment.envName;
}
