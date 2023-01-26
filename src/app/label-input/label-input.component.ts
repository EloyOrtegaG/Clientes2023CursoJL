import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jl-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.css']
})
export class LabelInputComponent {
  @Input() id!: string;
  @Input() etiqueta: string = '';
  @Input() tipo: string = 'text';
  @Input() requerido: boolean = false;
  
  @Input() error: string = 'El campo tiene un error';
  
  // DOBLE BINDING [(dato)]
  @Input() dato: any;
  @Output() datoChange = new EventEmitter<any>();

  // BINDING DE ENTRADA [soloLectura]="true"
  @Input() soloLectura: boolean = false;

  // BINDING DE SALIDA (botonClick)="metodo()"
  @Output() botonClick = new EventEmitter<void>();

  onInput(d: any) {
    // EMITIR EVENTO DE DATO CAMBIADO
    this.datoChange.emit(d);
  }

  onClick() {
    // EMITIR EVENTO DE CLICK
    this.botonClick.emit();
  }
}
