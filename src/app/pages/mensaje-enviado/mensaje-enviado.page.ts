import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mensaje-enviado',
  templateUrl: './mensaje-enviado.page.html',
  styleUrls: ['./mensaje-enviado.page.scss'],
})
export class MensajeEnviadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public volver(): void {
    this.router.navigate(['login']);
  }

}
