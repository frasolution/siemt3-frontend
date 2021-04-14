import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/security/authentication-request';
import { AuthenticationService } from 'src/app/security/service/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private router: Router) { }

  hide = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  login() {
    const authReq = new AuthenticationRequest(
      this.emailFormControl.value,
      this.passwordFormControl.value
    );
    this.authService.login(authReq)
      .subscribe(() => this.router.navigate(['dashboard']));
  }

  isInvalid() {
    return !this.emailFormControl.valid || !this.passwordFormControl.valid;
  }

}
