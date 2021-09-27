import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Persona } from 'src/app/model/Persona';
import { Usuario } from 'src/app/model/Usuario';


@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.page.html',
  styleUrls: ['./recovery-password.page.scss'],
})
export class RecoveryPasswordPage implements OnInit {
  
  public persona: Persona;

  constructor(private router: Router, private toastController: ToastController) {
    this.persona = new Persona();
    this.persona.email = '';
   }

  ngOnInit() {
  }

  public mandarEmail(): void {
    this.router.navigate(['/mensaje-enviado']);
  }

  public volverLogin(): void {
    this.router.navigate(['/login']);
  }


}
