import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent implements OnInit {
  private Title :  string  = 'Register Page'
  constructor( 
    private titleHead : Title,
    public authService: AuthService,
     ) { }

  ngOnInit(): void {
    this.titleHead.setTitle( this.Title )
    
  }

  onSubmit( data : any ){
    console.log( data ) 
    this.authService.SignUp( data.email, data.password )
  }
}
