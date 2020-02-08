import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {

  public url: string;


  constructor(public http: HttpClient) {


    this.url = environment.apiUrl + 'api/tipoDocumento/';

  }


  findAll(): Observable<any> {

    return this.http.get(this.url + 'findAll');

  }

}