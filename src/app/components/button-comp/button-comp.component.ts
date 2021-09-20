import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-comp',
  templateUrl: './button-comp.component.html',
  styleUrls: ['./button-comp.component.scss'],
})
export class ButtonCompComponent implements OnInit {

  @Input() buttonName: string;
  constructor() { }

  ngOnInit() {}

}
