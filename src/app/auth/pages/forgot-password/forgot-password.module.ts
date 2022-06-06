import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    ForgotPasswordRoutingModule
  ]
})
export class ForgotPasswordModule { }
