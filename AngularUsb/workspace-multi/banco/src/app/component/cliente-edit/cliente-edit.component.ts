import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { TipodocumentoService } from 'src/app/service/tipodocumento.service';
import { ActivoService } from 'src/app/service/activo.service';
import { Cliente } from 'src/app/domain/cliente';
import { TipoDocumento } from 'src/app/domain/tipo-documento';
import { Activo } from 'src/app/domain/activo';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  public id: string;
  public cliente: Cliente;

  public listaTipoDocument: TipoDocumento[];
  public listaActivo: Activo[];

  public showMsg: boolean = true;
  public msg: string;

  constructor(public router: Router, public activeRoute: ActivatedRoute, public clienteservice: ClienteService,
    public tipodocumentoservice: TipodocumentoService, public activoservice: ActivoService) { }

  ngOnInit() {

    this.findClienteById();
    this.getListaActivo();
    this.getTipoDocument();

  }

  public findClienteById() {

    let param = this.activeRoute.params['_value'];
    this.id = param.id;
    this.clienteservice.findById(this.id).subscribe(
      res => {
        this.cliente = res;
      },
      err => console.error(err)

    )


  }

  public getTipoDocument() {

    this.tipodocumentoservice.findAll().subscribe(
      res => {

        this.listaTipoDocument = res;

        console.log(this.listaTipoDocument);


      },
      err => console.error(err)

    )

  }


  public getListaActivo() {
    this.listaActivo = this.activoservice.findAll();
  }

  public editCliente(){
    this.clienteservice.upadate(this.cliente).subscribe(
      res=>{
        this.showMsg=true; 
        this.msg="El cliente se modifico con exito"       

      },
      err =>this.msg=err.error.mensaje
      
    )
  }

  public deleteCliente(){
    this.clienteservice.delete(this.id).subscribe(
      res=>{
        this.showMsg=true;     
        this.msg='el cliente se borro con exito';

      },
      err => console.error(err)
      
    )
  }

}
