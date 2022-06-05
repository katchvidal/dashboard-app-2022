import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticaComponent } from './estadistica.component';

const routes: Routes = [
  { path: '', component: EstadisticaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ Title ]
})
export class EstadisticaRoutingModule { }
