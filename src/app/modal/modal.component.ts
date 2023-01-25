import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() texto: string = '¿Estás seguro?';
  @Output() confirmacion = new EventEmitter<void>();

  onConfirmacion() {
    this.confirmacion.emit();
  }
}
