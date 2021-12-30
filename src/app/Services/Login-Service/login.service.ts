import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { LoginModel } from './../../Model/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = environment.URL;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  login(data: LoginModel): Observable<any> {
    const body = JSON.stringify(data);
    return this.http.post<any>(this.baseURL + 'login', body, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }
}

