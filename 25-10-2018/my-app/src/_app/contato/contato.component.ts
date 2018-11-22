import { Component, OnInit } from '@angular/core';
import Contato from './contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  titulo:string;
  contatos:Contato[];
  
  constructor() { }

  ngOnInit() {
    this.titulo = 'Título do componente de contato';
    this.contatos = [
      new Contato(1, 'Emmerson'),
      new Contato(2, 'Teste')
    ];
  }

  mostrarPrimeiroNome():void{
    alert('O primeiro nome é '+this.contatos[1].name);
  }

  mostrarFilho(filho:Contato){
    alert('Você é '+filho.name);
  }

}
