import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Alert } from '../../models/alert.model';
import { AlertService } from '../../services/alert.service';
import { Location } from '@angular/common'

@Component({
  selector: 'alert-detail',
  templateUrl: './alert-detail.component.html',
  styleUrls: ['./alert-detail.component.scss']
})
export class AlertDetailComponent implements OnInit {

  alert: Alert;

  constructor(private route: ActivatedRoute, private alertService: AlertService, private location: Location) { }

  ngOnInit(): void {
    const alertId = this.route.snapshot.paramMap.get('id');
    const observable = alertId === 'new' ? of(new Alert()) : this.alertService.getAlert(alertId);
    observable.subscribe(alert => this.alert = alert);
  }
  
  back(): void {
    this.location.back()
  }

}
