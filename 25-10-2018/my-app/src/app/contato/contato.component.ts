import { Component, OnInit } from '@angular/core';
import Contato from './contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  titulo: string;
  contatos:  Contato[];

  constructor() { }

  ngOnInit() {
    this.titulo = 'Meus Contatos';
    this.contatos = [
      new Contato(1,'Mauricio'), 
      new Contato(2, 'Marcos'),
      new Contato(3, 'Jefferson'),
      new Contato(4, 'Emmerson'),
      new Contato(5, 'André'),
      new Contato(6, 'Ariel'),
      new Contato(7, 'Joacir'),
      new Contato(8, 'Tiago'),
      new Contato(9, 'Felipe')
    ]
  }

  mostrarPrimeiroNome():void{
    alert('O primeiro nome é ' + this.contatos[0].nome);
  }

  mostrarFilho(filho:Contato){
    alert('Nome clicado: ' + filho.nome)
  }
}
