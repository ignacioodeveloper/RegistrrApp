import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonCompComponent } from './button-comp/button-comp.component';

const routes: Routes = [
  {
    path: '',
    component: BottomNavBarComponent,
    children: [
      // cuenta usuario
      {
        path: 'cuenta',
        loadChildren: '../cuenta/cuenta.module#CuentaPageModule'
      },
      // horario
      {
        path: 'horario',
        loadChildren: '../horario/horario.module#HorarioPageModule'
      },


      // asistencia
      {
        path: 'asistencia',
        loadChildren: '../asistencia/asistencia.module#AsistenciaPageModule'
      },
      // ayuda
      {
        path: 'ayuda',
        loadChildren: '../ayuda/ayuda.module#AyudaPageModule'
      }
    ]

    
    
  }
]

@NgModule({
  declarations: [
    HeaderComponent,
    BottomNavBarComponent,
    ButtonCompComponent,
  ],
  imports: [
    FormsModule,
    IonicModule,
    RouterModule,
    CommonModule,
    IonicModule,
  ],
  exports: 
  [
    HeaderComponent,
    BottomNavBarComponent,
    ButtonCompComponent
  ]

})
export class ComponentsModule { }
