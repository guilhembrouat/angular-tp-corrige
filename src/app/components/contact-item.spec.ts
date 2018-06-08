import { ContactItemComponent } from "./contact-item.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";

describe('ContactItemComponent', () => {
  
  let comp: ContactItemComponent;
  let fixture: ComponentFixture<ContactItemComponent>;
  let p: HTMLElement;
  let btn: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      declarations: [ContactItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ContactItemComponent);
    comp = fixture.componentInstance;
    p = fixture.debugElement.query(By.css('p')).nativeElement;
    btn = fixture.debugElement.query(By.css('button'));
  });
  
  it('should display name', () => {
    comp.contact = { id: 0, firstName: 'John', lastName: 'Doe' };

    fixture.detectChanges();
    
    expect(p.textContent).toContain('John Doe');
  });

  it('should ask for delete', () => {
    spyOn(comp.delete, 'emit');

    comp.contact = { id: 0, firstName: 'John', lastName: 'Doe' };
    btn.triggerEventHandler('click', {});
    
    fixture.detectChanges();
    
    expect(comp.delete.emit).toHaveBeenCalledWith(comp.contact);
  });
})