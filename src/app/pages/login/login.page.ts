import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario: Usuario;

  constructor(private router: Router, private toastController: ToastController) {
    this.usuario = new Usuario();
    this.usuario.nombreUsuario = '';
    this.usuario.password = '';
  }

  public ngOnInit(): void {
    // comentar antes de entregar
    // this.usuario.nombreUsuario = 'LuxoSSJ';
    // this.usuario.password = '1234';
    // this.ingresar();
  }

  public ingresarRecovery(): void {
    this.router.navigate(['/recovery-password']);
  }


  public ingresar(): void {

    if(!this.validarNombreUsuario(this.usuario)) {
      return;
    }

    this.mostrarMensaje('Bienvenido');

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['/cuenta'], navigationExtras);
  }

  public validarNombreUsuario(usuario: Usuario): boolean {

    const mensajeError = usuario.validarNombreUsuario();

    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }

    return true;
  }


  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }

}
