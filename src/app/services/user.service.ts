import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Global } from './global';

@Injectable()
export class UserService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  register(user: User): Observable<any> {
    // Se convierte a string el usuario para enviarlo en una peticion post
    let params = JSON.stringify(user);

    // Se configuran los headers
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Se retorna la peticion
    return this._http.post(this.url + 'register', params, {
      headers: headers,
    });
  }

  login(email: string, password: string): Observable<any> {
    return this._http.get(this.url + `login/${email}/${password}`);
  }

  getUser(id: string): Observable<any> {
    return this._http.get(this.url + `get-user/${id}`);
  }

  updateUser(id: string, newUser: User): Observable<any> {
    let params = JSON.stringify(newUser);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url + `update-user/${id}`, params, {
      headers: headers,
    });
  }

  deleteUser(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.delete(this.url + `delete-user/${id}`, {
      headers: headers,
    });
  }
}
