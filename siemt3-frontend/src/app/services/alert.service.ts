import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from '../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  readonly baseUrl = 'api/alert';

  constructor(private http: HttpClient) { }

  getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>(this.baseUrl);
  }

  getAlert(id: string) {
    return this.http.get<Alert>(`${this.baseUrl}/${id}`);
  }

}
