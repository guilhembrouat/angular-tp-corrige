import { ChatComponent } from "./chat.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

describe('ChatComponent', () => {
  let comp: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [ChatComponent] });
    fixture = TestBed.createComponent(ChatComponent);
    comp = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('p')).nativeElement;
  });
  
  it('should display text', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('chat works!');
  });
  
})