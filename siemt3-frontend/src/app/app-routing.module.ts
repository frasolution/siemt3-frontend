import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThresholdEditComponent } from './components/threshold-edit/threshold-edit.component';
import { AlertDetailComponent } from './components/alert-detail/alert-detail.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuardService } from './security/service/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'alerts/:id', component: AlertDetailComponent, canActivate: [AuthGuardService] },
  { path: 'thresholds/:id', component: ThresholdEditComponent, canActivate: [AuthGuardService] },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }