import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NinjaService {
  constructor(private http: HttpClient) {}

  getNinjas(): Observable<any> {
    // Appel à votre API ou logique pour récupérer les ninjas
    // Retournez l'observable contenant les données des ninjas
    return this.http.get<any>('votre-url-api/ninjas');
  }
}