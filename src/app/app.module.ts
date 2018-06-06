import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list.component';
import { ContactItemComponent } from './components/contact-item.component';
import { routes } from './app.routes';
import { NotFoundComponent } from './components/not-found.component';
import { ContactEditComponent } from './components/contact-edit.component';
import { ContactEdit2Component } from './components/contact-edit2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactItemComponent,
    NotFoundComponent,
    ContactEditComponent,
    ContactEdit2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
