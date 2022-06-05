import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetalleModule)},
      { path: 'estadistica', loadChildren: () => import('./pages/estadistica/estadistica.module').then( m => m.EstadisticaModule)},
      { path: '**', redirectTo:'detalle'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
