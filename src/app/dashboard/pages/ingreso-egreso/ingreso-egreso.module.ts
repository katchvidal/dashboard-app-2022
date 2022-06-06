import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresoEgresoRoutingModule } from './ingreso-egreso-routing.module';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IngresoEgresoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IngresoEgresoRoutingModule
  ]
})
export class IngresoEgresoModule { }
