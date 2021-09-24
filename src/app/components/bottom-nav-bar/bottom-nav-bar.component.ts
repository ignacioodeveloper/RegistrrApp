import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
})
export class BottomNavBarComponent implements OnInit {

  componentes: Componente[] = [
    
    {
      icon: 'person-circle',
      name: 'Cuenta',
      redirectTo: '/cuenta'
    },
    {
      icon: 'calendar',
      name: 'Horario',
      redirectTo: '/horario'
    },
    
    {
      icon: 'add',
      name: 'Escanear',
      
      redirectTo: '/qrreader'
    },
    
    {
      icon: 'podium',
      name: 'Asistencia',
      redirectTo: '/asistencia'
    },
    
    {
      icon: 'help',
      name: 'Ayuda',
      redirectTo: '/ayuda'
    },

  ];
  constructor() { }

  ngOnInit() {}

}

interface Componente {
  icon: string,
  name: string,
  redirectTo: string
}
