import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private nomeCompleto:string;
  private email:string;
  private telefone:string;
  private senha: string;
  private senhaRepetida: string;
  private _msgErroNome: string = null;
  private _msgErroTelefone: string = null;
  private _msgErroEmail: string = null;
  private _msgSenha: string = null;
  private _msgSenhaForte: string = null;
  private _msgSenhaFraca: string = null;
  private cont = 0;

  constructor() { }

  ngOnInit() {
  }

  private valida(){
    

    if(this.email == null || this.nomeCompleto == null || this.telefone == null || this.senha == null || this.senhaRepetida == null){
      alert("Preencha todos os campos corretamente!");
      
    }
    else{

      if(this.email.indexOf("@") == -1 || this.email.indexOf(".") == -1){
        this._msgErroEmail = "Digite um e-mail valido";
      }
      else{
          this.cont++;
          this._msgErroEmail = "";
      }

      if(this.telefone.toString().length >= 10 && this.telefone.toString().length <=11){
          this.cont++;
          this._msgErroTelefone = "";       
      }
      else{
        this._msgErroTelefone = "Digite um telefone valido";
      }

      if(this.nomeCompleto.indexOf(" ")== -1){
        this._msgErroNome = "Digite nome e sobrenome";
      }
      else{
          this.cont++;
          this._msgErroNome = "";
      }

      if(this.senha != this.senhaRepetida){
        this._msgSenha = "As senhas digitadas não correspondem";
      }
        else{
          if(this.senha.length >= 10 && (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 || this.senha.indexOf("&") != -1) || this.senha.indexOf("%") != -1)
          {
            this.cont++;
          }
        
        }

          if(this.cont >= 4)
          {
              alert("Cadastro efetuado com sucesso!");
              this.cont = 0;
          }

        }     



    }


    private forcaSenha(){
      
          if(this.senha.length >= 10 && (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 || this.senha.indexOf("&") != -1) || this.senha.indexOf("%") != -1)
          {
            this._msgSenhaForte = "Senha Forte";
            this._msgSenha = null;
            this._msgSenhaFraca = null;
          }
          else{
            this._msgSenhaFraca = "Senha Fraca";
            this._msgSenhaForte = null;
            this._msgSenha = null;
            }
        
        
    }

  }

