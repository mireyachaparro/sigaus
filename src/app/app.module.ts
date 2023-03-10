import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';

import { InicioComponent } from './inicio/inicio.component';
import { DeclaracionesComponent } from './declaraciones/declaraciones.component';
import { InstalacionesComponent } from './instalaciones/instalaciones.component';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { FinanciacionComponent } from './financiacion/financiacion.component';
import { InformesComponent } from './informes/informes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    DeclaracionesComponent,
    InstalacionesComponent,
    IncidenciasComponent,
    FinanciacionComponent,
    InformesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    PaginatorModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
