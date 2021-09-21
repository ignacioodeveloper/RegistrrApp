import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CuentaPageRoutingModule } from './cuenta-routing.module';
import { CuentaPage } from './cuenta.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule,
    ComponentsModule,
    MatIconModule
  ],
  declarations: [CuentaPage]
})
export class CuentaPageModule {}
