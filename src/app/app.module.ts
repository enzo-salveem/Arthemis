import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { HomeComponent } from './pages/home/home.component';
import { ReglasComponent } from './pages/reglas/reglas.component';
import { StrikesComponent } from './pages/strikes/strikes.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { GuerraComponent } from './pages/guerra/guerra.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    HomeComponent,
    ReglasComponent,
    StrikesComponent,
    BeneficiosComponent,
    GuerraComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
