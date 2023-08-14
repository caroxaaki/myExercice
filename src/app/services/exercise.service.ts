import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  // apiUrl = 'https://api.api-ninjas.com/v1/exercises';

  constructor(private http: HttpClient) {

 }
 
getExercises(){
  const data={
    'content-type':'application/json',
    'x-api-key':'UI0jPjromh92QjSVRlL46Q==HETRuxW0bfkuPOiE'
  }

  return this.http.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps', {headers:data})
}
}
