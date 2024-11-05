import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'gb-ch-login',
    pathMatch: 'full'
  },
  {
    path: 'gb-ch-login',
    loadChildren: () => import('./gb-ch-login/gb-ch-login.module').then( m => m.GBCHLoginPageModule)
  },
  {
    path: 'gb-ch-catalogo',
    loadChildren: () => import('./gb-ch-catalogo/gb-ch-catalogo.module').then( m => m.GBCHCatalogoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
