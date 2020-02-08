import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { TipoDocumentoComponent } from '../tipo-documento/tipo-documento.component';
import { Activo } from 'src/app/domain/activo';
import { ClienteService } from 'src/app/service/cliente.service';
import { TipodocumentoService } from 'src/app/service/tipodocumento.service';
import { ActivoService } from 'src/app/service/activo.service';
import { TipoDocumento } from 'src/app/domain/tipo-documento';

@Component({
  selector: 'app-cliente-save',
  templateUrl: './cliente-save.component.html',
  styleUrls: ['./cliente-save.component.css']
})
export class ClienteSaveComponent implements OnInit {


  public cliente: Cliente;
  public listaTipoDocument:TipoDocumento[];
  public listaActivo: Activo[];

  public showMsg: boolean = true;
  public msg: string;

  constructor(public clienteService: ClienteService, public tipodocumentoservice: TipodocumentoService,
               public activoservice: ActivoService) { }

  ngOnInit() {
    this.cliente = new Cliente(0, 'S', '', '', new Date(), new Date(), '', '', '', '', 1);
    this.getTipoDocument();
    this.getListaActivo();
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



  public save(){
    this.clienteService.save(this.cliente).subscribe(
      res=>{

      },
      err =>console.error(err)
      
    )
  }

}
