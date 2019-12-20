import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[];
  private idBusca:number;
  private _msgErro: string = null;
  private _post: Post=null;
  private vetorOunao: boolean = true;
  

  constructor(private postService: PostService) { }

   

  ngOnInit() {
    this.acharTodos();
  }

  acharTodos(){
    this.postService.retornaTodas().subscribe((postOut: Post[]) => this.posts = postOut);
    console.log(this.posts);
      this.vetorOunao = true;
      console.log(this.vetorOunao);
    }

    private pesquisar(){
      if (this.idBusca <= 0){
        this._msgErro = "Digite um numero valido";
      }
      else{ 
        this._msgErro = null;
        this.postService.recuperaPostPeloID(this.idBusca).subscribe((res: Post) => {
          this._post = res;
          this.vetorOunao = false;
          console.log(this.vetorOunao);
          console.log(this._post);
        });
      }
    }    

}
