import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Aluno from '../aluno';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.css']
})
export class FormAlunoComponent implements OnInit {

  @Output()
  salvar:EventEmitter<Aluno> = new EventEmitter<Aluno>();

  id:string = '';
  name:string = '';
  cpf:string = '';
  telefone:string = '';
  pai:string = '';
  mae:string = '';

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    const aluno = new Aluno(
      this.id != null ? parseInt(this.id) : undefined,
      this.name,
      this.cpf,
      this.telefone,
      this.pai,
      this.mae
    );
    this.salvar.emit(aluno);
    this.limparCampos();
  }
  limparCampos(){
    this.name = '';
    this.cpf = '';
    this.telefone = '';
    this.id = '';
    this.pai = '';
    this.mae = '';
  }

}
