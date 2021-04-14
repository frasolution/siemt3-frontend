import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private baseUrl = 'api/user';

  constructor(private http: HttpClient) { }

  reset(email: String) {
    return this.http.post<String>(`${this.baseUrl}/forgot-password`, email);
  }
}
