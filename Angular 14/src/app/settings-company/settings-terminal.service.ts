import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {map, retry, catchError, of, tap, Observable} from 'rxjs';

import { User } from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class SettingsTerminalService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{

    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`).pipe(
      tap(users => console.log(users)),
      retry(3),
      catchError(error => {
          return of([])
        }
      )
    );
  }

  getUser(userId: string): Observable<User>{
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`).pipe(
      tap(users => console.log(users)),
      retry(3)
    );
  }
  getFile(userId: string) : Observable<HttpResponse<Blob>> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`,
      {responseType: 'blob', observe: 'response'}).pipe(
      tap(file => console.log(file)),
      retry(3)
    );
  }

  uploadFile(formData: FormData): Observable<HttpEvent<string[]>>{
    return this.http.post<string[]>(`https://jsonplaceholder.typicode.com/users/`,
      formData, {observe: 'events', reportProgress: true}).pipe(
      tap(file => console.log(file)),
      retry(3)
    );
  }

  postUser(user: User): Observable<User>{
    return this.http.post<User>(`https://jsonplaceholder.typicode.com/users`, user).pipe(
      tap(users => console.log(users)),
      retry(3)
    );
  }

  updateUser(userId: {}, user: User): Observable<User>{
    return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${userId}`, user).pipe(
      tap(users => console.log(users)),
      retry(3)
    );
  }

  deleteUser(userId: {}): Observable<unknown>{
    return this.http.delete<unknown>(`https://jsonplaceholder.typicode.com/users/${userId}`).pipe(
      tap(users => console.log(users)),
      retry(3)
    );
  }
}
