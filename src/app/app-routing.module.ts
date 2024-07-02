import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboard',
    pathMatch: 'full'
  },
  {
    path: 'onboard',
    loadChildren: () => import('./pages/welcome/onboard/onboard.module').then( m => m.OnboardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/welcome/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/welcome/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'k-tabs',
    loadChildren: () => import('./pages/kasir/k-tabs/k-tabs.module').then( m => m.KTabsPageModule),
  },
  {
    path: 'o-tabs',
    loadChildren: () => import('./pages/owner/o-tabs/o-tabs.module').then( m => m.OTabsPageModule),
  },
  {
    path: 'outlet',
    loadChildren: () => import('./pages/welcome/outlet/outlet.module').then( m => m.OutletPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/welcome/admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
