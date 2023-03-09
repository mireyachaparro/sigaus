import { Component, OnInit } from '@angular/core';
import { dataJSON } from '../informes/data';
@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss'],
})
export class InformesComponent implements OnInit {
  datos: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.datos = dataJSON;
  }
}
