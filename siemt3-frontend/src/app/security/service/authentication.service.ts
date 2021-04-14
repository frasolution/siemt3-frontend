import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { AuthenticationRequest } from '../authentication-request';
import { AuthenticationResponse } from '../authentication-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly JWT = 'JWT';

  private baseUrl = 'auth';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(authReq: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/login`, authReq)
      .pipe(
        tap(res => localStorage.setItem(this.JWT, res.jwt))
      );
  }

  logout(): void {
    localStorage.removeItem(this.JWT);
  }

  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.getJwt())
  }

  getJwt() {
    return localStorage.getItem(this.JWT);
  }
}
