import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { NivelEducacional } from '../../model/NivelEducacional';
import { Persona } from '../../model/Persona';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  public usuario: Usuario;

  public nivelesEducacionales: NivelEducacional[] = [
    {id: 1, nombre: 'Básica Incompleta'},
    {id: 2, nombre: 'Básica Completa'},
    {id: 3, nombre: 'Media Incompleta'},
    {id: 4, nombre: 'Media Completa'},
    {id: 5, nombre: 'Superior Incompleta'},
    {id: 6, nombre: 'Superior Completa'}
  ];

  public persona: Persona = new Persona();
  
  constructor(
    private activeroute: ActivatedRoute
  , private router: Router
  , private alertController: AlertController) {

  this.activeroute.queryParams.subscribe(params => {       
    if (this.router.getCurrentNavigation().extras.state) { 

      this.usuario = this.router.getCurrentNavigation().extras.state.usuario;

    } else {

      this.router.navigate(['/cuenta']);
    }
});
}

  ngOnInit() {
  }

  public limpiarFormulario(): void {

    for (const [key, value] of Object.entries(this.persona)) {

        Object.defineProperty(this.persona, key, {value: ''});
      }
    }
  
    public mostrarDatosPersona(): void {
  
      if (this.persona.nombre.trim() === '' && this.persona.apellido === '') {
        this.presentAlert('Datos personales', 'Para mostrar los datos de la persona, '
          + 'al menos debe tener un valor para el nombre o el apellido.');
        return;
      }
  
      const mensaje =
          '<br>Usuario: ' + this.usuario.nombreUsuario
        + '<br>Nombre: ' + this.persona.nombre
        + '<br>Apellido: ' + this.persona.apellido
        + '<br>Educación: ' + this.persona.nivelEducacional.id + ' - '
        + this.nivelesEducacionales.find(
            n => n.id === this.persona.nivelEducacional.id).nombre
        + '<br>Nacimiento: ' + this.persona.fecNacimiento;
  
      this.presentAlert('Datos personales', mensaje);
    }
  
    public async presentAlert(titulo: string, mensaje: string) {
      const alert = await this.alertController.create({
        header: titulo,
        message: mensaje,
        buttons: ['OK']
      });
  
      await alert.present();
    }
  

}
