import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  public listaUser: Usuario[];

  constructor(private srv: UsuarioService) { }

  ngOnInit() {
    this.srv.recuperaTodos().subscribe((res:Usuario[])=>{
      this.listaUser = res;
    }); 
    
  }

}
