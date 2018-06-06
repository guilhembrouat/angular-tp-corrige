import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list.component';
import { ContactItemComponent } from './components/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
