import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-item',
  template: `
    <p>{{contact.firstName}} {{contact.lastName}}</p>
    <button (click)="onClickDeleteButton()">Delete</button>
    <a [routerLink]="['/edit', contact.id]">Edit</a>
    <a [routerLink]="['/edit2', contact.id]">Edit 2</a>
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
