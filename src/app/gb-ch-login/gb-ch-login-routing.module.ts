import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GBCHLoginPage } from './gb-ch-login.page';

const routes: Routes = [
  {
    path: '',
    component: GBCHLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GBCHLoginPageRoutingModule {}
