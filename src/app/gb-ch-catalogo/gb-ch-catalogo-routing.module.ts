import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GBCHCatalogoPage } from './gb-ch-catalogo.page';

const routes: Routes = [
  {
    path: '',
    component: GBCHCatalogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GBCHCatalogoPageRoutingModule {}
