import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  constructor(private resetPasswordService: ResetPasswordService, private router: Router) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  resetPassword() {
    this.resetPasswordService.reset(this.emailFormControl.value)
      .subscribe(() => this.router.navigate(['login']));
  }

  isInvalid() {
    return !this.emailFormControl.valid;
  }

}
