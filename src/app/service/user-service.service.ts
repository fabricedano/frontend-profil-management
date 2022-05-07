import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserServiceService {

  private baseUrl = 'http://localhost:8080/backend-profil-management/api/v1';

  constructor(private http: HttpClient) {
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getTypeUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/typesuser`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  getTypeUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/typesuser/${id}`);
  }

  updateUser(id: number, newUser): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, newUser);
  }

  updateTypeUser(id: number, newTypeUser): Observable<any> {
    console.log(newTypeUser)
    return this.http.put(`${this.baseUrl}/typesuser/${id}`, newTypeUser);
  }

  addUser(newUser): Observable<any> {
    console.log(newUser);
    return this.http.post(`${this.baseUrl}/users`, newUser);
  }

  addTypeUser(newTypeUser): Observable<any> {
    console.log(newTypeUser);
    return this.http.post(`${this.baseUrl}/typesuser`, newTypeUser);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  deleteTypeUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/typesuser/${id}`);
  }

}
