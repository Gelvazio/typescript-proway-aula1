import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Perfil from '../perfil';

@Component({
  selector: 'app-perfil-foto',
  templateUrl: './perfil-foto.component.html',
  styleUrls: ['./perfil-foto.component.css']
})
export class PerfilFotoComponent implements OnInit {

  @Input()
  foto:string;

  ngOnInit() {
  }
}
