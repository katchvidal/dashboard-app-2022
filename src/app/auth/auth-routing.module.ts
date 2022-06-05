import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
