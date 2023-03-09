import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DeclaracionesModule } from './declaraciones/declaraciones.module';
// import { FinanciacionComponent } from './financiacion/financiacion.component';
// import { IncidenciasComponent } from './incidencias/incidencias.component';
import { InformesComponent } from './informes/informes.component';
// import { InicioComponent } from './inicio/inicio.component';
// import { InstalacionesComponent } from './instalaciones/instalaciones.component';

const routes: Routes = [
  // { path: '', component: InicioComponent },
  // { path: 'declaraciones', component: DeclaracionesModule },
  // { path: 'instalaciones', component: InstalacionesComponent },
  // { path: 'incidencias', component: IncidenciasComponent },
  // { path: 'financiacion', component: FinanciacionComponent },
  { path: 'informes', component: InformesComponent },
  // { path: '**', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
