import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  { path: '', loadChildren: () => import('./components/home/home.module').then(x => x.HomeModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(x => x.LoginPageModule), },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

