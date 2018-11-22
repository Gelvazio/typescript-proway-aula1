import { Component, OnInit } from '@angular/core';
import Contato from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {

  contatos:Array<Contato> = [];

  constructor(private service:ContatoService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.service.getContatos()
      .subscribe(values => this.contatos = values);
  }

  handlerSalvar(contato:Contato){
    this.service.salvar(contato).subscribe(() => {
      this.loadData();
    });
  }
}
