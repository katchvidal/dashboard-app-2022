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
      {
        path: 'forgot-password',
        loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
      },
      {
        path: 'verify-email',
        loadChildren: () => import('./pages/verify-email/verify-email.module').then(m => m.VerifyEmailModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
