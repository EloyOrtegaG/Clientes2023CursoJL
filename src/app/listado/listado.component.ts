import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  @Input() filas: any[] = [];
  @Input() campos: any[] = [];
  @Input() urlListado: string = '/listado';
  @Input() urlFormulario: string = '/formulario';
  @Output() borradoClick = new EventEmitter<number>();

  idBorrar?: number;

  borrar(id: number): void {
    this.borradoClick.emit(id);
  }
}
