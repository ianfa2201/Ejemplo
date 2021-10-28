import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'lista-cosas', component:ListaCosasComponent},
  {path: 'nav-bar', component:NavbarComponent},
  {path: 'nueva-cosa', component:NuevaCosaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
