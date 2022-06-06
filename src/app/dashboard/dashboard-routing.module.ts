import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ AuthGuard ],
    // canActivateChild: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetalleModule)},
      { path: 'estadistica', loadChildren: () => import('./pages/estadistica/estadistica.module').then( m => m.EstadisticaModule)},
      { path: 'ingreso-egreso', loadChildren: () => import('./pages/ingreso-egreso/ingreso-egreso.module').then( m => m.IngresoEgresoModule)},
      { path: '**', redirectTo:'detalle'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
