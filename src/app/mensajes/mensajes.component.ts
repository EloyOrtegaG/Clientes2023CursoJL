import { Component } from '@angular/core';
import { Alerta } from '../alerta';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent {
  constructor(public mensajeService: MensajeService) {}
}
