import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyEmailRoutingModule } from './verify-email-routing.module';
import { VerifyEmailComponent } from './verify-email.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    VerifyEmailComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    VerifyEmailRoutingModule
  ]
})
export class VerifyEmailModule { }
