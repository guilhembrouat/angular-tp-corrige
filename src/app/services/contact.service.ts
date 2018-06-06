import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [
    {
      "id": 1,
      "firstname": "Talon",
      "lastname": "Underwood"
    },
    {
      "id": 2,
      "firstname": "Hamilton",
      "lastname": "Snow"
    },
    {
      "id": 3,
      "firstname": "Lance",
      "lastname": "Rutledge"
    },
  ];

  constructor() { }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: number): Contact {
    return this.contacts.find(c => c.id === id);
  }
}
