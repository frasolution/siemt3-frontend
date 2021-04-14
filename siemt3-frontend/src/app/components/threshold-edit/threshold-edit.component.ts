import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Threshold } from 'src/app/models/threshold.model';
import { ThresholdDto } from 'src/app/models/thresholdDto.model';
import { ThresholdService } from 'src/app/services/threshold.service';


@Component({
  selector: 'threshold-edit',
  templateUrl: './threshold-edit.component.html',
  styleUrls: ['./threshold-edit.component.scss']
})
export class ThresholdEditComponent {

  threshold: Threshold;
  dto: ThresholdDto = new ThresholdDto;
  thresholdForm: FormGroup;
  
  constructor(private thresholdService: ThresholdService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.initThreshold(+id);
    this.initThresholdForm(+id);
  }

  private initThreshold(id: number) {
    this.thresholdService.getThreshold(id).subscribe(threshold => {
      this.threshold = threshold;
      this.thresholdForm = new FormGroup({
        id: new FormControl({value: this.threshold.id, disabled: true}, ),
        name: new FormControl({value: this.threshold.name, disabled: true},),
        type: new FormControl({value: this.threshold.type, disabled: true},),
        number: new FormControl(this.threshold.number),
      });
    });
  }

  private initThresholdForm(id: number) {

  }

  getFormControl(controlName: string) {
    return this.thresholdForm.get(controlName) as FormControl;
  }

  save() {
    this.updateThreshold();
    this.updateDto();
    this.thresholdService.updateThreshold(this.dto)
      .subscribe(dto => this.dto = dto);
  }

  private updateDto(){
    this.dto.id = +this.route.snapshot.paramMap.get('id');
    this.dto.number = this.threshold.number;
  }

  private updateThreshold() {
    this.threshold.number = this.thresholdForm.get('number').value;
  }
    
  back(): void {
    this.location.back()
  }

}
