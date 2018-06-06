import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Contact> {

  constructor(private router: Router, private service: ContactService) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Contact> {
    const id = +route.params.id;
    const contact = this.service.getContact(id);
    if (contact) {
      return Promise.resolve(contact);
    } else {
      this.router.navigateByUrl('/not-found');
      return Promise.reject(`No contact found with ID ${id}`);
    }
  }
}
