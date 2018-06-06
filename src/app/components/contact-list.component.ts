import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-list',
  template: `
    <app-contact-item 
      *ngFor="let contact of contacts"
      [contact]="contact"
    ></app-contact-item>
  `,
  styles: []
})
export class ContactListComponent {

  contacts: Contact[] = [
    {
      "firstname": "Talon",
      "lastname": "Underwood"
    },
    {
      "firstname": "Hamilton",
      "lastname": "Snow"
    },
    {
      "firstname": "Lance",
      "lastname": "Rutledge"
    },
    {
      "firstname": "Barrett",
      "lastname": "Shaw"
    },
    {
      "firstname": "Halla",
      "lastname": "Nguyen"
    },
    {
      "firstname": "Garth",
      "lastname": "Bridges"
    },
    {
      "firstname": "Lilah",
      "lastname": "Wilkerson"
    },
    {
      "firstname": "Keefe",
      "lastname": "Dodson"
    },
    {
      "firstname": "Ayanna",
      "lastname": "Flynn"
    },
    {
      "firstname": "Zachary",
      "lastname": "Scott"
    },
  ]

}
