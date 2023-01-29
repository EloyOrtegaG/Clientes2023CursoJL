import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes-listado',
  templateUrl: './clientes-listado.component.html',
  styleUrls: ['./clientes-listado.component.scss']
})
export class ClientesListadoComponent implements OnInit {
  filas: Cliente[] = [];
  campos = ['id', 'nombre', 'apellidos', 'email', 'telefono'];
  
  constructor(public clienteService: ClienteService) {}
  
  ngOnInit(): void {
    this.clienteService.obtenerTodos().subscribe(clientes => this.filas = clientes);
  }

  onBorrar(id: number) {
    this.clienteService.borrar(id).subscribe(() => this.ngOnInit());
  }

}
