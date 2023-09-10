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

  save(user: User): Observable<any> {
    // Se convierte a string el usuario para enviarlo en una peticion post
    let params = JSON.stringify(user);

    // Se configuran los headers
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Se retorna la peticion
    return this._http.post(this.url + 'save', params, {
      headers: headers,
    });
  }
}
