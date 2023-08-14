import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExerciseService } from '../services/exercise.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
constructor( private key: ExerciseService){
  
}

intercept(
  request: HttpRequest<any>,
  next: HttpHandler
): Observable<HttpEvent<any>> {
  const apiKey = 'UI0jPjromh92QjSVRlL46Q==HETRuxW0bfkuPOiE';
  const cloneReq = request.clone({
    headers: request.headers.set('X-Api-Key', apiKey),
  });

  const apiKeyHeaderValue = cloneReq.headers.get('X-Api-Key');
  console.log(apiKeyHeaderValue)

  console.log(cloneReq);

  return next.handle(cloneReq);
}
}
