import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  private id: number;
  display='none';


  constructor(private rota:ActivatedRoute, private srv:UsuarioService) { }

  ngOnInit() {
      this.id = this.rota.snapshot.params["id"];

      this.srv.recuperaDetalhe(this.id).subscribe((res:Usuario)=>{
      this.usuario = res;
  });

}

enviarAlteracoes(){
  this.srv.atualiza(this.usuario).subscribe((res)=>{
    alert("Atualizado com sucesso");
  },
  (err)=>{
    alert("Erro ao atualizar");
    console.log(err);
  });

}

}
