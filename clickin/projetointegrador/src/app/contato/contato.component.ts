import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  private nomeCompleto:string;
  private email:string;
  private telefone:string;
  private mensagem:string;
  private _msgErroNome: string = null;
  private _msgErroTelefone: string = null;
  private _msgErroEmail: string = null;
  private _msgErroMensagem: string = null;


  constructor() { }

  ngOnInit() {
  }


  private valida(){
    var cont =0;

            if(this.email == null || this.nomeCompleto == null || this.telefone == null || this.mensagem == null){
              alert("Preencha todos os campos corretamente!");
            }
            else{
                

               if(this.email.indexOf("@") == -1 || this.email.indexOf(".") == -1){
                  this._msgErroEmail = "Digite um e-mail valido";
                }
                else{
                    cont++;
                    this._msgErroEmail = "";
                }

                if(this.nomeCompleto.indexOf(" ")== -1){
                  this._msgErroNome = "Digite seu nome completo";
                }
                else{
                    cont++;
                    this._msgErroNome = "";
                }

                if(this.telefone.length != 11){
                  this._msgErroTelefone = "Digite um telefone valido";
                }
                else{
                    cont++;
                    this._msgErroTelefone = "";
                }
                if(this.mensagem == ""){
                  this._msgErroMensagem = "Digite uma mensagem valida";
                }
                else{
                    cont++;
                    this._msgErroMensagem = "";
                }


                if(cont >= 4)
                {
                    alert("Mensagem enviada!");
                    cont = 0;
                }
              }     

}

}
