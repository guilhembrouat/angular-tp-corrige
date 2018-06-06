import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-item',
  template: `
    <p>{{contact.firstname}} {{contact.lastname}}</p>
  `,
  styles: []
})
export class ContactItemComponent {
  @Input() contact: Contact;

}
