import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  private nomeCompleto:string;
  private email:string;
  private telefone:string;
  private senha: string;
  private senhaRepetida: string;
  private senhaLogin: string;
  private emailLogin: string;
  private _msgErroNome: string = null;
  private _msgErroTelefone: string = null;
  private _msgErroEmail: string = null;
  private _msgSenha: string = null;
  private _msgSenhaForte: string = null;
  private _msgSenhaFraca: string = null;
  private cont = 0;

  constructor(private srv: UsuarioService) { }

  ngOnInit() {
  }

  private valida(){
    

    if(this.email == null || this.nomeCompleto == null || this.telefone == null || this.senha == null || this.senhaRepetida == null){
      alert("Preencha todos os campos corretamente!");
      
    }
    else{

      if(this.email.indexOf("@") == -1 || this.email.indexOf(".") == -1){
        this._msgErroEmail = "Digite um e-mail válido";
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
        this._msgErroTelefone = "Digite um telefone válido";
      }

      if (!this.isTipo(this.nomeCompleto))
      {
        this._msgErroNome = "Nome e/ou Sobrenome Inválidos";
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
          else{
            this.cont++;
          }
        
        }

          if(this.cont >= 4)
          {
              this.cont = 0;
              this.enviarDados();
              
          }
          else{
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

    public isTipo(pVal) { 
      var reTipo = /[A-z][ ][A-z]/; 
      return reTipo.test(pVal); 
    }


    enviarDados(){
      this.usuario.nome = this.nomeCompleto;
      this.usuario.email = this.email;
      this.usuario.telefone = this.telefone;
      this.usuario.senha = this.senha;

      console.log(this.usuario);
      this.srv.insere(this.usuario).subscribe(
        res =>{
          alert("Cadastro efetuado com sucesso!");
        },
        err=>{
          console.log(err);
          alert("Erro ao inserir");
        }
      )

    }



    validaLogin(){

      this.usuario.email = this.emailLogin;
      this.usuario.senha = this.senhaLogin;

      this.srv.recuperaLoginESenha(this.usuario).subscribe(
        res =>{
          alert("E-mail e senha validados com sucesso!");
        },
        err=>{
          alert("Usuário não cadastrado no sistema");
        }
      )



    }


  }

