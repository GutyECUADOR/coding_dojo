import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SalasService } from 'src/app/services/salas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-sala',
  templateUrl: './new-sala.component.html',
  styleUrls: ['./new-sala.component.css']
})
export class NewSalaComponent {
  formulario = this.fb.group({
    nombreSala: [ null, Validators.required],
    descripcion: [null, Validators.required],

  });

  public sala;


  constructor(private fb: FormBuilder, public salasService: SalasService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  onSubmit() {
    console.log(this.formulario);

    if (this.formulario.valid) {
      this.sala = {
        titulo: this.formulario.controls.nombreSala.value,
        descripcion: this.formulario.controls.descripcion.value,
      };
      this.createSala(this.sala);
    }
  }

  createSala(nuevaSala) {
    this.salasService.nuevaSala(nuevaSala)
    .subscribe(data => {
      console.log(data);
      // this.router.navigate(['/dashboard']);
    }, error => {
      console.log(error);
    });
  }
}
