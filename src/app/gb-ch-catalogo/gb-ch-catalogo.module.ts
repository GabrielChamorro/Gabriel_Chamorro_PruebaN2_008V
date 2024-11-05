import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GBCHCatalogoPageRoutingModule } from './gb-ch-catalogo-routing.module';

import { GBCHCatalogoPage } from './gb-ch-catalogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GBCHCatalogoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GBCHCatalogoPage]
})
export class GBCHCatalogoPageModule {}
