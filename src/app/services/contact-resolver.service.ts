import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from './contact.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Contact> {

  constructor(private router: Router, private service: ContactService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Contact> {
    const id = +route.params.id;
    return this.service.getContact(id).pipe(
      catchError(err => {
        this.router.navigateByUrl('/not-found');
        return throwError(err);
      })
    );
  }
}
