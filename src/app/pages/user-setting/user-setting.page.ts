import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { NivelEducacional } from 'src/app/model/NivelEducacional';
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.page.html',
  styleUrls: ['./user-setting.page.scss'],
})
export class UserSettingPage implements OnInit {



  public persona: Persona = new Persona();

  constructor(
    private activeroute: ActivatedRoute
    , private router: Router

  ) { 
        // Se llama a la ruta activa y se obtienen sus parámetros mediante una subscripcion
        this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
          if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras
    
            // Si tiene datos extra, se rescatan y se asignan a una propiedad
            this.persona = this.router.getCurrentNavigation().extras.state.persona;
    
          } else {
            /*
              Si no vienen datos extra desde la página anterior, quiere decir que el usuario
              intentó entrar directamente a la página home sin pasar por el login,
              de modo que el sistema debe enviarlo al login para que inicie sesión.
            */
            this.router.navigate(['/login']);
          }
      });
  }

  ngOnInit() {
  }
  public noPasarDatos(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        
      }
    }
    this.router.navigate(['/cuenta', navigationExtras])
  }

  public pasarDatos(): void {
  

    const navigationExtras: NavigationExtras = {
      state: {
        persona: this.persona
      }
    }
    this.router.navigate(['/cuenta'], navigationExtras);
  
  }
  

}
