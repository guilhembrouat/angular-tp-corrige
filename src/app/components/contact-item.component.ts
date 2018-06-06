import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-item',
  template: `
    <p>{{contact.firstname}} {{contact.lastname}}</p>
    <button (click)="onClickDeleteButton()">Delete</button>
  `,
  styles: ['p { color: red; }']
})
export class ContactItemComponent {
  @Input() contact: Contact;
  @Output() delete = new EventEmitter<Contact>();

  onClickDeleteButton() {
    this.delete.emit(this.contact);
  }
}
