import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    // default route
    path: '',
    redirectTo: 'welcome-page',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'qrreader',
    loadChildren: () => import('./pages/qrreader/qrreader.module').then( m => m.QrreaderPageModule)
  },
  {
    path: 'recovery-password',
    loadChildren: () => import('./pages/recovery-password/recovery-password.module').then( m => m.RecoveryPasswordPageModule)
  },
  {
    path: 'mensaje-enviado',
    loadChildren: () => import('./pages/mensaje-enviado/mensaje-enviado.module').then( m => m.MensajeEnviadoPageModule)
  },
  {
    path: 'welcome-page',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then( m => m.WelcomePagePageModule)
  },
  {
    path: 'user-setting',
    loadChildren: () => import('./pages/user-setting/user-setting.module').then( m => m.UserSettingPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
