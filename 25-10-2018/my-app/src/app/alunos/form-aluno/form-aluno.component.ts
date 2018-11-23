import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Aluno from '../aluno';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.css']
})
export class FormAlunoComponent implements OnInit {

  @Output()
  salvar:EventEmitter<Aluno> = new EventEmitter<Aluno>();

  id:string = '';
  nome:string = '';
  cpf:string = '';
  telefone:string = '';
  pai:string = '';
  mae:string = '';

  constructor(
    private route:ActivatedRoute, 
    private service:AlunoService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadData(id);
  }

  loadData(id:string){
    if(id && id !== 'novo') {
      this.service.buscarAlunoPorId(id)
        .subscribe(aluno => {
          this.id = String(aluno.id);
          this.nome = aluno.nome;
          this.cpf = aluno.cpf;
          this.telefone = aluno.telefone;
          this.pai = aluno.pai;
          this.mae = aluno.mae;
        });
    }
  }

  enviar(){
    const aluno = new Aluno(
      this.id != null ? parseInt(this.id) : undefined,
      this.nome,
      this.cpf,
      this.telefone,
      this.pai,
      this.mae
    );
    this.service.salvar(aluno).subscribe(result => {
      this.limparCampos();
      this.router.navigate(['alunos']);
    })
  }
  limparCampos(){
    this.nome = '';
    this.cpf = '';
    this.telefone = '';
    this.id = '';
    this.pai = '';
    this.mae = '';
  }

}
