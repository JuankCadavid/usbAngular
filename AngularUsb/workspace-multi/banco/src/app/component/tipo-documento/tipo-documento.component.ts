import { Component, OnInit } from '@angular/core';
import { TipodocumentoService } from 'src/app/service/tipodocumento.service';
import { TipoDocumento } from 'src/app/domain/tipo-documento';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.css']
})
export class TipoDocumentoComponent implements OnInit {

  public listaTipoDocumento: TipoDocumento;

  constructor(public tipodocumentosrvice: TipodocumentoService) { }

  ngOnInit() {

    this.findAll();
  }


  public findAll() {
    this.tipodocumentosrvice.findAll().subscribe(
      res => {

        this.listaTipoDocumento = res;

      },
      err => console.error(err),

    )
  }


}
