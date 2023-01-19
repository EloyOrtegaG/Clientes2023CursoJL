import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { CLIENTES } from './mock-clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  obtenerTodos(): Observable<Cliente[]> {
    return of(CLIENTES);
  }
  obtenerPorId(id: number): Observable<Cliente | undefined> {
    return of(CLIENTES.find(c => c.id = id));
  }
  insertar(cliente: Cliente): Observable<Cliente>  {
    cliente.id = Math.max(...CLIENTES.map(c => c.id)) + 1;
    CLIENTES.push(cliente);
    return of(cliente);
  }
  modificar(cliente: Cliente): Observable<Cliente> {
    const i = CLIENTES.findIndex(c => c.id === cliente.id);
    CLIENTES[i] = cliente;
    return of(cliente);
  }
  borrar(id: number): Observable<any> {
    const i = CLIENTES.findIndex(c => c.id === id);
    CLIENTES.splice(i, 1);

    return of({});
  }
}
