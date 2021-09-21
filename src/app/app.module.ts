import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './components/header/header.component';
import { BottomNavBarComponent } from './components/bottom-nav-bar/bottom-nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Animation, AnimationController } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    BottomNavBarComponent,
    MatIconModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
