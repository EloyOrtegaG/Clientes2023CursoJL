import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.recargarClientes();
  }

  private recargarClientes() {
    this.clienteService.obtenerTodos().subscribe(clientes => this.clientes = clientes
    );
  }

  borrar(id: number): void {
    if (confirm(`¿Estás seguro de que quieres borrar el id = ${id}?`)) {
      this.clienteService.borrar(id).subscribe(
        () => this.recargarClientes()
      );
    }
  }
}
