import { Injectable, NgZone } from '@angular/core';
import { IngresoEgreso } from '../interfaces/ingreso-egreso.interfaces';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {
  userData: any; // Save logged in user data
  constructor(
    public router: Router, //  Router Actions
    public AngularFireStore: AngularFirestore, // Inject Firestore service
    public AngularFireAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { 
        /* Saving user data in localstorage when 
   logged in and setting up null when logged out */
   this.AngularFireAuth.authState.subscribe((user) => {
    if (user) {
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      JSON.parse(localStorage.getItem('user')!);
    } else {
      localStorage.setItem('user', 'null');
      JSON.parse(localStorage.getItem('user')!);
    }
  });
  }

  initEgresoIngresoListener(){
    
    console.log( this.userData.uid )
    
  }

  crearIngresoEgreso( ingresoEgreso: IngresoEgreso ){
  return this.AngularFireStore.doc(`ingresos-egresos/${ this.userData.uid }`).collection('items').add({ ...ingresoEgreso })
  }
  
}
