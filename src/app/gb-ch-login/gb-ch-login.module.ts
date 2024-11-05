import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GBCHLoginPageRoutingModule } from './gb-ch-login-routing.module';

import { GBCHLoginPage } from './gb-ch-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GBCHLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GBCHLoginPage]
})
export class GBCHLoginPageModule {}
