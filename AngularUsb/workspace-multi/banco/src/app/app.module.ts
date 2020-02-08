import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './component/cliente-list/cliente-list.component';
import { TipoDocumentoComponent } from './component/tipo-documento/tipo-documento.component';
import { ClienteSaveComponent } from './component/cliente-save/cliente-save.component';
import { ClienteEditComponent } from './component/cliente-edit/cliente-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    TipoDocumentoComponent,
    ClienteSaveComponent,
    ClienteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
