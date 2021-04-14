import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthInterceptor } from './security/service/auth-interceptor.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AlertDetailComponent } from './components/alert-detail/alert-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ThresholdEditComponent } from './components/threshold-edit/threshold-edit.component';


//Angular materials
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AlertsComponent } from './components/alerts/alerts.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ThresholdsComponent } from './components/thresholds/thresholds.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartsComponent } from './components/charts/charts.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertsComponent,
    AlertDetailComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    ThresholdsComponent,
    ChartsComponent,
    ThresholdEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
