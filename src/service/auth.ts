import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  base = 'http://localhost:5000/api/auth'; // או הפורט שלכם
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.base}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.base}/login`, data);
  }
}
