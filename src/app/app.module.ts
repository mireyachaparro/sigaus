import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
// import { InformesComponent } from './informes/informes.component';

import { InicioComponent } from './inicio/inicio.component';
import { DeclaracionesComponent } from './declaraciones/declaraciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // InformesComponent,
    InicioComponent,
    DeclaracionesComponent,
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
