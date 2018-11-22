import { Component, OnInit } from '@angular/core';
import Perfil from './perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  titulo:string;
  perfis:Perfil[];

  constructor() { }

  ngOnInit() {
    this.titulo = 'Título do componente de perfil';
    this.perfis = [
      new Perfil(1, 'Elegante'),
      new Perfil(2, 'Moderado')
    ];
  }

  mostrarFilho(filho:Perfil){
    alert('Você é '+filho.name);
  }

}
