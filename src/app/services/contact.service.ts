import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [
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
  ];

  constructor() { }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
