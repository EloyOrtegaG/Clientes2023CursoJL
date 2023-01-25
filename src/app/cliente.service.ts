import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Cliente } from './cliente';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:3000/clientes/';

  constructor(private http: HttpClient, private mensajeService: MensajeService) {}

  obtenerTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url).pipe(
      tap(() => this.mensajeService.alertar({ mensaje: 'Se han recibido los registros', tipo: 'success'})),
      catchError(() => {
        this.mensajeService.alertar({ mensaje: 'Error al cargar los registros', tipo: 'danger'});
        return [];
      })
    );
  }
  obtenerPorId(id: number): Observable<Cliente | undefined> {
    return this.http.get<Cliente>(this.url + id).pipe(
      tap(() => this.mensajeService.alertar({ mensaje: 'Se ha recibido el registro ' + id, tipo: 'success'})),
      catchError(() => {
        this.mensajeService.alertar({ mensaje: 'Error al cargar el registro ' + id, tipo: 'danger'});
        return [];
      })
    );
  }
  insertar(cliente: Cliente): Observable<Cliente>  {
    return this.http.post<Cliente>(this.url, cliente);
  }
  modificar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.url + cliente.id, cliente);
  }
  borrar(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
