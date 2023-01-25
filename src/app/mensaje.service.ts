import { Injectable } from '@angular/core';
import { Alerta } from './alerta';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  alerta?: Alerta;

  alertar(alerta: Alerta) {
    this.alerta = alerta;
  }

  borrar() {
    this.alerta = undefined;
  }
}
