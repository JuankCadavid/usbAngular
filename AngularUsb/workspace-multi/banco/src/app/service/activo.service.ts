import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activo } from '../domain/activo';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  public listaActivo: Activo[];

  constructor() {
    this.listaActivo = [
      { id: 'S', nombre: 'SI' },
      { id: 'N', nombre: 'NO' }
    ];
  }

  public findAll(): Activo[] {
    return this.listaActivo;

  }

}
