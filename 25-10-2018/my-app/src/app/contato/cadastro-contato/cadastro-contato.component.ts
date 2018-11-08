import { Component, OnInit, Input } from '@angular/core';
import Contato from '../contato';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {
  
  @Input()
  contatos:Contato[];
  
  constructor() { }

  ngOnInit() {
  }

}
