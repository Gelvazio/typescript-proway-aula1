import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';
import { ActivatedRoute } from '@angular/router';
import { Tipo } from '../contato';

@Component({
  selector: 'app-react-form-contato',
  templateUrl: './react-form-contato.component.html',
  styleUrls: ['./react-form-contato.component.css']
})
export class ReactFormContatoComponent implements OnInit {

  tipo:Tipo;
  tipos:Array<string> = Object.keys(Tipo).filter(k=> /\D/.test(k));
  saveSuccess:Boolean = false;

  formContato = this.fb.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', Validators.required],
    telefone: ['', Validators.required],
    tipo: ['', Validators.required],
  });

  constructor(
    private fb:FormBuilder, 
    private service: ContatoService,
    private route: ActivatedRoute,
  ) { }

  submitHandler() {
    const data = this.formContato.value;
    this.service.salvar(data)
    .subscribe(() => {
      // alert('Contato salvo com sucesso!');
      this.saveSuccess = true;
      setTimeout(() => {
        this.saveSuccess = false;
      },3000);
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id && id != 'novo') {
      this.service.buscarContatoPorId(id)
      .subscribe(aluno => {
        this.formContato.patchValue(aluno);
      })
    }
  }

}
