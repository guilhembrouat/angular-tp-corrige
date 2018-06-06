import { Route } from "@angular/router";
import { ContactListComponent } from "./components/contact-list.component";
import { NotFoundComponent } from "./components/not-found.component";
import { ContactEditComponent } from "./components/contact-edit.component";
import { ContactEdit2Component } from "./components/contact-edit2.component";
import { ContactResolverService } from "./services/contact-resolver.service";

export const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/list'},
  {path: 'list', component: ContactListComponent},
  {path: 'edit/:id', component: ContactEditComponent},
  {path: 'edit2/:id', component: ContactEdit2Component, resolve: {
    contact: ContactResolverService
  }},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent},
]