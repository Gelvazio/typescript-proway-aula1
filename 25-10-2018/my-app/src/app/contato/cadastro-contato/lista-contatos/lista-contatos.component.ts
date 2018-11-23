import { Component, OnInit, Input } from '@angular/core';
import Contato from '../../contato';
import { ContatoService } from '../../contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})
export class ListaContatosComponent implements OnInit {

  @Input()
  contatos:Array<Contato>;
  
  constructor(private service:ContatoService, private router:Router) { }

  ngOnInit() {
    this.service.getContatos()
      .subscribe(values => this.contatos = values);
  }

  novo(){
    this.router.navigate(['contatos','novo'])
  }

}
