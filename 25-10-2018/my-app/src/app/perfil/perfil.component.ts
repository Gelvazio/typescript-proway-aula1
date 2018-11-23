import { Component, OnInit } from '@angular/core';
import Perfil from './perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  titulo: string;
  perfil: Perfil;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Perfil';
    this.perfil = new Perfil(
      1, 
      'Mauricio Schmitz', 
      'Developer', 
      'contato@mauricioschmitz.com.br', 
      'https://www.mauricioschmitz.com.br', 
      'https://www.facebook.com/mauricioschmitzdesenvolvedorweb',
      'https://cdn.mauricioschmitz.com.br/portfolio-assets/media/hello-section/about.jpg'
    );
  }

  mostrarFilho(filho:Perfil){
    alert('Você é ' + filho.nome)
  }
}
