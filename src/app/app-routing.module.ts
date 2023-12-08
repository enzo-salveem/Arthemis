import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReglasComponent } from './pages/reglas/reglas.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { GuerraComponent } from './pages/guerra/guerra.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reglas', component: ReglasComponent },
  { path: 'strikes', component: ReglasComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'guerra', component: GuerraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
