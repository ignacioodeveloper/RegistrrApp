import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrreaderPageRoutingModule } from './qrreader-routing.module';

import { QrreaderPage } from './qrreader.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrreaderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [QrreaderPage]
})
export class QrreaderPageModule {}
