import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class SettingsTerminalService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{

    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  getUser(userId: string): Observable<User>{
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  uploadFile(formData: FormData): Observable<HttpEvent<string[]>>{
    return this.http.post<string[]>(`https://jsonplaceholder.typicode.com/users/`, formData, {observe: 'events', reportProgress: true});
  }

  postUser(user: User): Observable<User>{
    return this.http.post<User>(`https://jsonplaceholder.typicode.com/users`, user);
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }

  deleteUser(userId: number): Observable<unknown>{
    return this.http.delete<unknown>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}
