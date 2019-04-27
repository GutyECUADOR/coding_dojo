import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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


  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.formulario);
    if (this.formulario.valid) {
      console.log('Registrando');
    }
  }
}
