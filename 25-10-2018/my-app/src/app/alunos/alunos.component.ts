import { Component, OnInit } from '@angular/core';
import Aluno from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos:Array<Aluno> = [];

  constructor(private service:AlunoService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.service.getAlunos()
      .subscribe(values => this.alunos = values);
  }

  handlerSalvar(aluno:Aluno){
    this.service.salvar(aluno).subscribe(() => {
      this.loadData();
    });
  }

}
