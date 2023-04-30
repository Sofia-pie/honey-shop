import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { User } from '../models/user';
import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://localhost:8080/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: User;
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-up
  register(user: User): Observable<any> {
    let api = `${this.url}/auth/register`;
    return this.http
      .post(api, user)
      .pipe(catchError(this.handleError))
      .pipe(tap((res) => console.log()));
  }
  // Sign-in
  login(user: User) {
    return this.http
      .post<any>(`${this.url}/auth/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.jwt_token);
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          if (res.isAdmin) {
            this.router.navigate(['/dashboard']);
            return;
          }
          this.router.navigate(['/main-page']);
        });
      });
  }

  get UserId() {
    let authToken = localStorage.getItem('access_token');
    if (authToken) {
      const tokenPayload: any = decode(authToken);
      return tokenPayload.userId;
    }
    return '';
  }
  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  test() {
    console.log(this.currentUser);
  }
  logout() {
    let removeToken = localStorage.removeItem('access_token');

    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  getUserProfile(id: any): Observable<any> {
    let api = `${this.url}/user/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res;
      }),
      tap((res) => console.log(res)),
      catchError(this.handleError)
    );
  }

  get isAdmin(): boolean {
    let authToken = localStorage.getItem('access_token');
    if (authToken) {
      const tokenPayload: any = decode(authToken);
      return tokenPayload.isAdmin;
    }

    return false;
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
