import { ExampleService } from "./example.service";

describe('ExampleService', () => {

  let service: ExampleService;

  beforeEach(() => {
    service = new ExampleService();
  })

  it('should find foo', () => {
    expect(service.findFoo(['bar', 'foo', 'baz'])).toEqual(1);
  })

  it('should not find foo', () => {
    expect(service.findFoo(['bar', 'baz'])).toEqual(false);
  })

  it('should handle null/undefined array', () => {
    expect(service.findFoo(undefined)).toEqual(false);
    expect(service.findFoo(null)).toEqual(false);
  })

})