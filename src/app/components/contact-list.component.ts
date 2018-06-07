import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  template: `
    <a routerLink="/list/sub">Show sub component</a>
    <p>This is the contacts list</p>
    <app-contact-item 
      *ngFor="let contact of contacts$ | async"
      [contact]="contact"
      (delete)="onContactDelete($event)"
    ></app-contact-item>
    
    <h2>Sub :</h2>
    <router-outlet></router-outlet>
  `,
  styles: [`
  :host {
    display: block; 
    border: 1px solid green; 
  }
  :host-context(.error) {
    border-color: red;
  }
`]
})
export class ContactListComponent {

  // contacts: Contact[];
  contacts$: Observable<Contact[]>;

  constructor(private service: ContactService) {
    this.contacts$ = service.getContacts();
    // this.service.getContacts()
    //   .subscribe(contacts => this.contacts = contacts);
  }

  onContactDelete(contact: Contact) {
    console.log(`Contact deleted: ${contact.firstname} ${contact.lastname}`)
  }
}
