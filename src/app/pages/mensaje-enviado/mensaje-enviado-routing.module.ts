import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeEnviadoPage } from './mensaje-enviado.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeEnviadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeEnviadoPageRoutingModule {}
