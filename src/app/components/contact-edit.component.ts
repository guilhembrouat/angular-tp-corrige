import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';
import { switchMap } from 'rxjs/operators'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  template: `
    <form [formGroup]="form" (submit)="saveContact()">
    <div>
      <label>First name</label>
      <input type="text" formControlName="firstName">
      <p *ngIf="hasError('firstName')">First name is mandatory</p>
    </div>
    <div>
      <label>Last name</label>
      <input type="text" formControlName="lastName">
      <p *ngIf="hasError('lastName')">Last name is mandatory</p>
    </div>
    <fieldset formGroupName="address">        
      <div>
        <label>Street number</label>
        <input type="text" formControlName="streetNumber">
      </div>
      <div>
        <label>Street name</label>
        <input type="text" formControlName="streetName">
      </div>
      <div>
        <label>Postal code</label>
        <input type="text" formControlName="postalCode">
        <p *ngIf="hasError('postalCode', 'address')">Postal code is mandatory</p>
      </div>
      <div>
        <label>Town</label>
        <input type="text" formControlName="town">
        <p *ngIf="hasError('town', 'address')">Town is mandatory</p>
      </div>
      <div>
        <label>Country</label>
        <input type="text" formControlName="country">
      </div>
    </fieldset>
    <button type="submit" *ngIf="form.valid">Submit</button>
    </form>

    <a routerLink="/list">Back to list</a>
  `,
  styles: ['p {color: red; margin: 0 auto;}']
})
export class ContactEditComponent implements OnInit {
  form: FormGroup;
  contact: Contact;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ContactService,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: fb.group({
        country: '',
        postalCode: ['', Validators.required],
        town: ['', Validators.required],
        streetName: '',
        streetNumber: '',
      })
    })
  }

  ngOnInit() {
    // this.route.params
    //   .subscribe(params => {
    //     this.service.getContact(+params.id)
    //       .subscribe(contact => this.contact = contact);
    //   });

    this.route.params.pipe(
      switchMap(params => this.service.getContact(+params.id))
    ).subscribe(contact => {
      this.contact = contact;
      this.form.reset(contact);
    });
  }

  saveContact() {
    this.service.saveContact({
      ...this.contact,
      ...this.form.value
    }).subscribe(() => {
      this.router.navigateByUrl('/list');
    })
  }

  hasError(controlName: string, group?: string): boolean {
    const control = group 
      ? (this.form.controls[group] as FormGroup).controls[controlName]
      : this.form.controls[controlName];
    return !control.pristine && control.invalid;
  }

}
