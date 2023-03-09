import { Component, OnInit } from '@angular/core';
import { dataJSON } from '../declaraciones/data';
@Component({
  selector: 'app-declaraciones',
  templateUrl: './declaraciones.component.html',
  styleUrls: ['./declaraciones.component.scss'],
})
export class DeclaracionesComponent implements OnInit {
  datos: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.datos = dataJSON;
  }
}
