import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [
    `
      #send {
        cursor: pointer;
      }
    `
  ]
})
export class SignInComponent implements OnInit {
  nameHead : any = 'Login Page'
  constructor( 
    private titleHead: Title,
    public authService : AuthService,
     ) { }

  ngOnInit(): void {
   this.titleHead.setTitle( this.nameHead )
  }

  onSubmit( data : any ) {
    this.authService.SignIn( data.correo, data.password )
  }
}
