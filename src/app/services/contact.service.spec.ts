import { ContactService, BASE_URL } from "./contact.service";
import { HttpClient } from "@angular/common/http";
import { of, empty } from "rxjs";
import { async } from "@angular/core/testing";

describe('ContactService', () => {
  
  let service: ContactService;

  const fakeHttp = {} as HttpClient;
  fakeHttp.get = () => empty();

  beforeEach(() => {
    service = new ContactService(fakeHttp);
  })

  it('should fetch contacts list', async(() => {
    spyOn(fakeHttp, 'get').and.returnValue(of([]));
    service.getContacts().subscribe(() => {
      expect(fakeHttp.get).toHaveBeenCalledWith(BASE_URL);
    })
  }))

});