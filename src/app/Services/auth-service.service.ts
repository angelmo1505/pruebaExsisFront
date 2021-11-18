import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  uri = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  login(email: string, password: string) {
    return this.http.post(this.uri + '/authenticate', {
      email: email,password: password
    });
  }

  // logout() {
  //   localStorage.removeItem('token');
  // }

  // public get logIn(): boolean {
  //   return (localStorage.getItem('token') !== null);
  // }
}
