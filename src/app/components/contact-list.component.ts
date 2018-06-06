import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  template: `
    <p>This is the contacts list</p>
    <app-contact-item 
      *ngFor="let contact of contacts"
      [contact]="contact"
      (delete)="onContactDelete($event)"
    ></app-contact-item>
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

  contacts: Contact[];

  constructor(private service: ContactService) {
    this.contacts = service.getContacts();
  }

  onContactDelete(contact: Contact) {
    console.log(`Contact deleted: ${contact.firstname} ${contact.lastname}`)
  }
}
