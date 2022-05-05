import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// componentes
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';

const routes: Routes = [
  { path: '', component: ListarAlumnosComponent },
  { path: 'crear-alumno', component: CrearAlumnoComponent },
  { path: 'editar-alumno/:id', component: CrearAlumnoComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
