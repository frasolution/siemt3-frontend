import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThresholdService } from 'src/app/services/threshold.service';
import { Threshold } from 'src/app/models/threshold.model'
import { ThresholdDto } from 'src/app/models/thresholdDto.model'

@Component({
  selector: 'thresholds',
  templateUrl: './thresholds.component.html',
  styleUrls: ['./thresholds.component.scss']
})
export class ThresholdsComponent implements OnInit {

  thresholds: Threshold[] = [];
  displayedColumns: string[] = ['id', 'name', 'type', 'number'];

  constructor(private thresholdService: ThresholdService) { }

  ngOnInit(): void {
    this.initThresholds();
  }

  private initThresholds() {
    this.thresholdService.getThresholds().subscribe(thresholds => {
      this.thresholds = thresholds;
    });
  }

}
