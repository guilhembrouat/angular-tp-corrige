import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://192.168.1.53:3000/api/contacts/';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(BASE_URL);
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(BASE_URL+id);
  }

  saveContact(contact: Partial<Contact>): Observable<Contact> {
    if (contact.id) {
      return this.http.patch<Contact>(BASE_URL+contact.id, contact);
    } else {
      return this.http.post<Contact>(BASE_URL, contact);
    }
  }
}
