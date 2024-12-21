import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiRoutes } from '../constants/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'https://api.example.com/auth'; // Replace with your auth endpoint

  constructor(private http: HttpClient) {}

  // Login method to authenticate and retrieve JWT
  login<T>(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(apiRoutes['login'], credentials) as Observable<T>;
  }

  register<T>(credentials: { username: string; password: string; fullName: string }): Observable<any> {
    return this.http.post(apiRoutes['register'], credentials) as Observable<T>;
  }

  // Store JWT in localStorage
  storeToken(token: string): void {
    localStorage.setItem('jwt_token', token);
  }

  // Retrieve JWT from localStorage
  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  // Logout and remove token
  logout(): void {
    localStorage.removeItem('jwt_token');
  }
}
