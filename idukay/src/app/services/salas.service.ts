import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  constructor(private http: HttpClient) {
    console.log('Service ready');
    this.getSalas();
  }

  getSalas() {
    return this.http.get('http://localhost:3000/salas').pipe(map(respuesta => {
      return respuesta;
    }));

  }

  nuevaSala(sala) {
    const body = JSON.stringify(sala);
    const headers = new HttpHeaders ({
      'Content-Type': 'Aplicaction/json'
    });

    return this.http.post('http://localhost:3000/salas', body, { headers }).pipe(map(respuesta => {
      console.log(respuesta);
      return respuesta;
    }));

  }
}
