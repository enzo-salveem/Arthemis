import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReglasComponent } from './pages/reglas/reglas.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { GuerraComponent } from './pages/guerra/guerra.component';
import { StrikesComponent } from './pages/strikes/strikes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reglas', component: ReglasComponent },
  { path: 'strikes', component: StrikesComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'guerra', component: GuerraComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
