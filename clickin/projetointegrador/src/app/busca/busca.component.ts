import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  constructor(private postService: PostService) { }

  private idBusca:number;
  private _msgErro: string = null;
  private _post: Post=null;
  private vetorOunao: boolean = true;

  ngOnInit() {

  }

  private pesquisar(){
    if (this.idBusca <= 0){
      this._msgErro = "Digite um numero valido";
    }
    else{ 
      this._msgErro = null;
      this.postService.recuperaPostPeloID(this.idBusca).subscribe((res: Post) => {
        this._post = res;
        this.vetorOunao = true;
        console.log(this._post);
      });
    }
  }

}
