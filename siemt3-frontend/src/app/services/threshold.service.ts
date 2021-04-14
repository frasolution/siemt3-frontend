import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Threshold } from '../models/threshold.model';
import { ThresholdDto } from '../models/thresholdDto.model';

@Injectable({
  providedIn: 'root'
})
export class ThresholdService {

  readonly baseUrl = 'api/threshold';

  constructor(private http: HttpClient) { }

  getThresholds(): Observable<Threshold[]> {
    return this.http.get<Threshold[]>(this.baseUrl);
  }

  getThreshold(id: number): Observable<Threshold> {
    return this.http.get<Threshold>(`${this.baseUrl}/${id}`);
  }

  updateThreshold(thresholdDto: ThresholdDto) {
    return this.http.post<ThresholdDto>(`${this.baseUrl}`, thresholdDto);
  }
}
