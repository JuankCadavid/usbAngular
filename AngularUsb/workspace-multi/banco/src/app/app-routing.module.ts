import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ClienteListComponent } from './component/cliente-list/cliente-list.component';
import { TipoDocumentoComponent } from './component/tipo-documento/tipo-documento.component';
import { ClienteSaveComponent } from './component/cliente-save/cliente-save.component';
import { ClienteEditComponent } from './component/cliente-edit/cliente-edit.component';

const routes: Routes = [
  {
    path: 'cliente-list',
    component: ClienteListComponent
  },
  {
    path: 'tipoDocomentoList',
    component: TipoDocumentoComponent
  },
  {
    path:'clienteSave',
    component:ClienteSaveComponent
  },
  {
    path:'clienteEdit/:id',
    component:ClienteEditComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
