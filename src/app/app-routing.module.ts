import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListadoComponent } from './clientes-listado/clientes-listado.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: ClientesListadoComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'formulario/:id', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
