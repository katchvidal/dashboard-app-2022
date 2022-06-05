import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { SignInRoutingModule } from './sign-in-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    SignInRoutingModule
  ],
  providers: [ Title ]
})
export class SignInModule { }
