import { Component, OnInit, Input } from '@angular/core';
import Aluno from '../aluno';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  @Input()
  alunos:Array<Aluno>;

  constructor(private service:AlunoService, private router:Router) { }

  ngOnInit() {
    this.service.getAlunos()
      .subscribe(values => this.alunos = values);
  }

  novo(){
    this.router.navigate(['alunos', 'novo'])
  }
}
