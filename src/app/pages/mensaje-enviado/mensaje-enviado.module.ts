import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeEnviadoPageRoutingModule } from './mensaje-enviado-routing.module';

import { MensajeEnviadoPage } from './mensaje-enviado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeEnviadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MensajeEnviadoPage]
})
export class MensajeEnviadoPageModule {}
