import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from "./home/home.component";
import { FeedComponent } from "./feed/feed.component";
import { BuscaComponent } from "./busca/busca.component";
import { ListagemComponent } from './listagem/listagem.component';
import { DetalheComponent } from './detalhe/detalhe.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full"},
  { path: 'home', component: HomeComponent},
  { path: 'quemsomos', component: QuemsomosComponent },
  { path: 'contato', component: ContatoComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'busca', component: BuscaComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'detalhe/:id', component: DetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
