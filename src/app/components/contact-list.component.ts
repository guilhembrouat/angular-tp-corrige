import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-list',
  template: `
    <p><a routerLink="/list/sub">Show sub component</a></p>
    <p><a routerLink="/create">Create contact</a></p>
    <p>This is the contacts list</p>
    <p>
      <input type="search" placeholder="Search" (keyup)="search($event.target.value)">
    </p>
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
  // allContacts: Contact[];
  contacts$: Observable<Contact[]>;

  constructor(private service: ContactService) {
    this.contacts$ = service.getContacts();
    // this.service.getContacts()
    //   .subscribe(contacts => this.contacts = contacts);
  }

  onContactDelete(contact: Contact) {
    this.contacts$ = this.service.deleteContact(contact.id).pipe(
      switchMap(() => this.service.getContacts()) 
    );
  }

  search(value: string) {
    this.contacts$ = this.service.getContacts().pipe(
      map(contacts => contacts.filter(c => {
        const fullName = `${c.firstName} ${c.lastName}`.toLowerCase();
        return fullName.indexOf(value.toLowerCase()) !== -1;
      })) 
    );

    /*
    this.allContacts = this.contacts;
    this.contacts = this.allContacts.filter(c => c.firstName.indexOf(value) !== -1)
    */

    /*
    this.service.getContacts().subscribe(contacts => {
      this.contacts = contacts.filter(c => c.firstName.indexOf(value) !== -1)
    })
    */
  }
}
