import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  catchError,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getPeopleList(): Observable<any> {
    return this.httpClient.get('http://localhost:4200/assets/peoplesd.json').pipe(
      catchError(err => {
        console.log(err);
        return throwError(new Error('Something went wrong'));
      }));
  }
}
