import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url: string;


  constructor(public http: HttpClient) {
    this.url = environment.apiUrl + 'api/cliente/';
  }


  findAll(): Observable<any> {

    return this.http.get(this.url + 'findAll');

  }

  public save(cliente:Cliente):Observable<any>{

    return this.http.post(this.url+'save',cliente);

  }


  public findById(id:string):Observable<any>{
    return this.http.get(this.url+'findById/'+id);
  }


  public upadate(cliente:Cliente):Observable<any>{

    return this.http.put(this.url+'update',cliente)
  }

  public delete(id:string):Observable<any>{

    return this.http.delete(this.url+'delete/'+id)
  }

}
