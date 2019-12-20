import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from "./home/home.component";
import { FeedComponent } from "./feed/feed.component";

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full"},
  { path: 'home', component: HomeComponent},
  { path: 'quemsomos', component: QuemsomosComponent },
  { path: 'contato', component: ContatoComponent},
  { path: 'feed', component: FeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
