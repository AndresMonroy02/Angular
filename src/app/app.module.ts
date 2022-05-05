import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearAlumnoComponent,
    ListarAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
