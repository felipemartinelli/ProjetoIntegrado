import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  retornaTodas(){
    return this.http.get("http://cloud.professorisidro.com.br:8088/postagens");
  }

  recuperaPostPeloID(id:number){
    return this.http.get("http://cloud.professorisidro.com.br:8088/postagens/"+id);
  }


}
