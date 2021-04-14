import { Component, OnInit } from '@angular/core';
import { Alert } from '../../models/alert.model';
import { AlertService } from '../../services/alert.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  alerts: Alert[] = [];
  pageSlice: Alert[] = [];
  displayedColumns: string[] = ['id', 'eventId', 'eventType', 'eventName', 'date', 'priority'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  
  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.initAlerts();
  }

  private initAlerts() {
    this.alertService.getAlerts().subscribe(alerts => {
      this.alerts = alerts;
      this.pageSlice = this.alerts.slice(0,5);
    });
    
  }

  OnPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.alerts.length) {
      endIndex = this.alerts.length;
    }
    this.pageSlice = this.alerts.slice(startIndex, endIndex);
  }

}
