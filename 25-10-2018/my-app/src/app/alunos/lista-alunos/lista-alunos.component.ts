import { Component, OnInit, Input } from '@angular/core';
import Aluno from '../aluno';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  @Input()
  alunos:Array<Aluno>;

  constructor() { }

  ngOnInit() {
  }

}
