import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle.component';

const routes: Routes = [
  { path: '', component: DetalleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ Title ]
})
export class DetalleRoutingModule { }
