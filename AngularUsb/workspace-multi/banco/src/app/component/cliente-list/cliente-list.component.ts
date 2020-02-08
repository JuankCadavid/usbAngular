import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/domain/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

 public listaCliente : Cliente[];

  constructor(public clienteservice:ClienteService) { }

  ngOnInit() {

    this.findAll();
  }


  public findAll(){
    this.clienteservice.findAll().subscribe(
      res =>{

        this.listaCliente = res;

      },
      err =>  console.error(err),
      
    )
  }

}
