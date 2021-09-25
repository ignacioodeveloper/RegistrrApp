import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss'],
})
export class LoginHeaderComponent implements OnInit {

  @Input() tituloLogin: string;
  @Input() tituloLogin2: string;
  @Input() subtituloLogin: string;
  @Input() subtituloLogin2: string;

  constructor() { }

  ngOnInit() {}

}
