import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-edit2',
  template: `
  <p>
    Edit : {{contact?.firstName}} {{contact?.lastName}}
  </p>
  
  <a routerLink="/list">Back to list</a>
  `,
  styles: []
})
export class ContactEdit2Component implements OnInit {

  contact: Contact;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.contact = data.contact;
    })
  }

}
