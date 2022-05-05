import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/Alumno';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {
  alumnoForm: FormGroup;
  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService) { 
    this.alumnoForm = this.fb.group({
      documento: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarAlumno() {
    const ALUMNO: Alumno = {
      documento: this.alumnoForm.get('documento')?.value,
      nombre: this.alumnoForm.get('nombre')?.value,
      apellido: this.alumnoForm.get('apellido')?.value,
      edad: this.alumnoForm.get('edad')?.value,
    }
    console.log(ALUMNO);
    this.toastr.success('Alumno creado correctamente');
    this.router.navigate(['/']);
  }
}
