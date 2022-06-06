import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IngresoEgreso } from 'src/app/interfaces/ingreso-egreso.interfaces';
import { IngresoEgresoService } from 'src/app/services/ingreso-egreso.service';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: [
  ]
})
export class IngresoEgresoComponent implements OnInit {
  f : FormGroup | any;
  tipo = 'ingreso';

  constructor(
    public ingresoEgresoService : IngresoEgresoService
  ) { }

  ngOnInit(): void {
    this.f = new FormGroup({
      'descripcion' : new FormControl('', Validators.required ),
      'monto' : new FormControl(0, Validators.min(0) ),
      "tipo" : new FormControl('', Validators.required )
      
    })
  }
  submitIngreso(){
    
    const ingresoEgreso : IngresoEgreso = {
      ...this.f.value
    }
  //  this.ingresoEgresoService.crearIngresoEgreso( ingresoEgreso ).then(
  //    ( res ) => {
  //      window.alert('Creado Satisfactoriamente' )
  //    }
  //  )
  //  this.f.reset()
    
  }
}
