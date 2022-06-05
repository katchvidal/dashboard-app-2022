import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent implements OnInit {
  private Title :  string  = 'Register Page'
  constructor( private titleHead : Title ) { }

  ngOnInit(): void {
    this.titleHead.setTitle( this.Title )
  }

  onSubmit( data : any ){
    console.log( data ) 
  }
}
