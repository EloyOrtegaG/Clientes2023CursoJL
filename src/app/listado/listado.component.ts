import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { CLIENTES } from '../mock-clientes';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  clientes: Cliente[] = CLIENTES;
  
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void 
  {
    this.clienteService.obtenerTodos().subscribe(clientes =>
      this.clientes = clientes
    );  
  }

  borrar(id: number): void {
    this.clienteService.borrar(id).subscribe();
  }
}
