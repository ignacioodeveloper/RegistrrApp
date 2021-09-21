import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaPageRoutingModule } from './ayuda-routing.module';

import { AyudaPage } from './ayuda.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaPageRoutingModule,
    ComponentsModule,
    MatIconModule
  ],
  declarations: [AyudaPage]
})
export class AyudaPageModule {}
