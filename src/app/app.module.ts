import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
// import { CalendarModule } from 'primeng/calendar';
// import { SliderModule } from 'primeng/slider';
// import { DialogModule } from 'primeng/dialog';
// import { MultiSelectModule } from 'primeng/multiselect';
// import { ContextMenuModule } from 'primeng/contextmenu';
// import { ButtonModule } from 'primeng/button';
// import { ToastModule } from 'primeng/toast';
// import { InputTextModule } from 'primeng/inputtext';
// import { ProgressBarModule } from 'primeng/progressbar';
// import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InformesComponent } from './informes/informes.component';
import { DeclaracionesComponent } from './declaraciones/declaraciones.component';
// import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InformesComponent,
    DeclaracionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    PaginatorModule,
    // CalendarModule,
    // SliderModule,
    // DialogModule,
    // MultiSelectModule,
    // ContextMenuModule,
    // DropdownModule,
    // ButtonModule,
    // ToastModule,
    // InputTextModule,
    // ProgressBarModule,
    HttpClientModule,
    FormsModule,
    // TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
