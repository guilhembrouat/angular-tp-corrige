import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

export class ExampleInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const newReq = req.clone();
    newReq.headers.append('X-Language', 'fr');
    
    return next.handle(newReq).pipe(
      map((response: HttpResponse<any>) => {
        // modify response
        return response;
      }) 
    );
  }
}
