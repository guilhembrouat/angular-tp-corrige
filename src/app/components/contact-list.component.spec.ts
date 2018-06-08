import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ContactListComponent } from "./contact-list.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ContactService } from "../services/contact.service";
import { of } from "rxjs";

describe('ContactListComponent', () => {
  let comp: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  const fakeService = {
    getContacts: () => of([
      {id: 0, firstName: 'a', lastName: 'A'},
      {id: 1, firstName: 'b', lastName: 'B'},
      {id: 2, firstName: 'c', lastName: 'C'},
    ])
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      declarations: [ContactListComponent],
      providers: [
        {
          provide: ContactService,
          useValue: fakeService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ContactListComponent);
    comp = fixture.componentInstance;
  });
  
  it('should display contacts', async(() => {
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('app-contact-item'));

    expect(items.length).toBe(3);
    expect(items[0].properties.contact.id).toEqual(0);
  }));
  
})