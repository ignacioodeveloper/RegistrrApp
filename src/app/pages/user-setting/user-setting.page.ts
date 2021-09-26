import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';

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
  ) 
    { 
      this.activeroute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) { 
          // guarda los datos en persona
          this.persona = this.router.getCurrentNavigation().extras.state.persona;
        } else {

          this.router.navigate(['/cuenta']);
          }
      });
  }

  ngOnInit() {
  }

  public pasarDatos(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        persona: this.persona
      }
    }
    this.router.navigate(['/cuenta'], navigationExtras);
  }

  public noPasarDatos(): void {
    const navigationExtras: NavigationExtras = {
      state: {}
    }
    this.router.navigate(['/cuenta', navigationExtras])
  }

}
