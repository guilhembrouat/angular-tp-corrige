import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-edit',
  template: `
    <p>
      Edit : {{contact?.firstname}} {{contact?.lastname}}
    </p>

    <a routerLink="/list">Back to list</a>
  `,
  styles: []
})
export class ContactEditComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute, private service: ContactService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.contact = this.service.getContact(+params.id);
      });
  }

}
