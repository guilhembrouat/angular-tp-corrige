import { Route } from "@angular/router";
import { ContactListComponent } from "./components/contact-list.component";
import { NotFoundComponent } from "./components/not-found.component";
import { ContactEditComponent } from "./components/contact-edit.component";

export const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/list'},
  {path: 'list', component: ContactListComponent},
  {path: 'edit/:id', component: ContactEditComponent},
  {path: '**', component: NotFoundComponent},
]