import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    BottomNavBarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: 
  [
    HeaderComponent,
    BottomNavBarComponent
  ]

})
export class ComponentsModule { }
