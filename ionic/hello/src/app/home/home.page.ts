import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contatos = [
    {
      id: 1,
      nome: 'Contato 01'
    },
    {
      id: 2,
      nome: 'Contato 02'
    },
    {
      id: 3,
      nome: 'Contato 03'
    },
    {
      id: 4,
      nome: 'Contato 04'
    },
    {
      id: 5,
      nome: 'Contato 05'
    }
  ];

  constructor(private router: Router){}

  goContent(){
    this.router.navigate(['conteudo']);
  }

  goButtons(){
    this.router.navigate(['botoes']);
  }
}
