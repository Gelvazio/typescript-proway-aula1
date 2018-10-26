import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  titulo: string;
  contatos:  string[];

  constructor() { }

  ngOnInit() {
    this.titulo = 'Meus Contatos';
    this.contatos = [
      'Mauricio', 
      'Marcos',
      'Jefferson',
      'Emmerson',
      'André',
      'Ariel',
      'Joacir',
      'Tiago',
      'Felipe'
    ];
  }

}
