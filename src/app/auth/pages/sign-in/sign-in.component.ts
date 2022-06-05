import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [
  ]
})
export class SignInComponent implements OnInit {
  nameHead : any = 'Login Page'
  constructor( private titleHead: Title ) { }

  ngOnInit(): void {
   this.titleHead.setTitle( this.nameHead )
  }

}
