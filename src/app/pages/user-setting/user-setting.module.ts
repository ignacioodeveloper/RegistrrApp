import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSettingPageRoutingModule } from './user-setting-routing.module';

import { UserSettingPage } from './user-setting.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSettingPageRoutingModule,
    ComponentsModule
    
  ],
  declarations: [UserSettingPage]
})
export class UserSettingPageModule {}
