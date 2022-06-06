import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { SignInRoutingModule } from './sign-in-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    SignInRoutingModule
  ],
  providers: [ Title ]
})
export class SignInModule { }
