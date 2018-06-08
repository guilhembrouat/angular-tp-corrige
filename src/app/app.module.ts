import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list.component';
import { ContactItemComponent } from './components/contact-item.component';
import { routes } from './app.routes';
import { NotFoundComponent } from './components/not-found.component';
import { ContactEditComponent } from './components/contact-edit.component';
import { ContactEdit2Component } from './components/contact-edit2.component';
import { ContactListSubComponent } from './components/contact-list-sub.component';
import { ChatComponent } from './components/chat.component';
import { HelpComponent } from './components/help.component';
import { ExampleInterceptor } from './example-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactItemComponent,
    NotFoundComponent,
    ContactEditComponent,
    ContactEdit2Component,
    ContactListSubComponent,
    ChatComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExampleInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
