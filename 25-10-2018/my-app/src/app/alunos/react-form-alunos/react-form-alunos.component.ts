import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-react-form-alunos',
  templateUrl: './react-form-alunos.component.html',
  styleUrls: ['./react-form-alunos.component.css']
})
export class ReactFormAlunosComponent implements OnInit {

  formAluno = this.fb.group({
    id: [''],
    nome: ['', [Validators.required, Validators.minLength(3)]],
    cpf: ['', Validators.required],
    telefone: [''],
    pai: [''],
    mae: ['', Validators.required],
  });

  constructor(
    private fb:FormBuilder, 
    private service: AlunoService,
    private route: ActivatedRoute,
  ) { }

  submitHandler() {
    const data = this.formAluno.value;
    this.service.salvar(data)
    .subscribe(() => {
      alert('Aluno salvo com sucesso!');
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id && id != 'novo') {
      this.service.buscarAlunoPorId(id)
      .subscribe(aluno => {
        this.formAluno.patchValue(aluno);
      })
    }
  }

}
