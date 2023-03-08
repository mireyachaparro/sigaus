import { Component, OnInit, ViewChild } from '@angular/core';
import data from '../../assets/declaraciones.json';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss'],
})
export class InformesComponent {
  datos: any = data.data;
  constructor() {}
  ngOnInit(): void {}
}
