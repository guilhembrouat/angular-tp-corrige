import { Route } from "@angular/router";
import { ContactListComponent } from "./components/contact-list.component";
import { NotFoundComponent } from "./components/not-found.component";
import { ContactEditComponent } from "./components/contact-edit.component";
import { ContactEdit2Component } from "./components/contact-edit2.component";
import { ContactResolverService } from "./services/contact-resolver.service";
import { ContactListSubComponent } from "./components/contact-list-sub.component";
import { ChatComponent } from "./components/chat.component";
import { HelpComponent } from "./components/help.component";

export const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/list'},
  {path: 'list', component: ContactListComponent, children: [
    { path: 'sub', component: ContactListSubComponent }
  ]},
  {path: 'edit/:id', component: ContactEditComponent},
  {path: 'edit2/:id', component: ContactEdit2Component, resolve: {
    contact: ContactResolverService
  }},
  {path: 'create', component: ContactEditComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'chat', outlet: 'bottom', component: ChatComponent},
  {path: 'help', outlet: 'bottom', component: HelpComponent},
  {path: '**', component: NotFoundComponent},
]