import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Contato, { Tipo } from '../../contato';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../../contato.service';

@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styleUrls: ['./formulario-contato.component.css']
})
export class FormularioContatoComponent implements OnInit {

  @Output()
  salvar:EventEmitter<Contato> = new EventEmitter<Contato>();

  id:string = '';
  name:string = '';
  email:string = '';
  telefone:string = '';
  tipo:Tipo;
  tipos:Array<string> = Object.keys(Tipo).filter(k=> /\D/.test(k));

  constructor(
    private route:ActivatedRoute, 
    private service:ContatoService,
    private router:Router
  ) { }

  ngOnInit() {
    //async
    //this.route.paramMap.subscribe(e => console.log(e.get('id')));
    //sync
    //console.log(this.route.snapshot.paramMap.get('id'));
    const id = this.route.snapshot.paramMap.get('id');
    this.loadData(id);
  }

  loadData(id:string){
    if(id && id !== 'novo') {
      this.service.buscarContatoPorId(id)
        .subscribe(contato => {
          this.id = String(contato.id);
          this.name = contato.name;
          this.email = contato.email;
          this.telefone = contato.telefone;
          this.tipo = contato.tipo;
        });
    }
  }

  enviar(){
    const contato = new Contato(
      this.id != null ? parseInt(this.id) : undefined,
      this.name,
      this.email,
      this.telefone,
      this.tipo
    );
    this.service.salvar(contato).subscribe(result => {
      this.limparCampos();
      this.router.navigate(['contatos']);
    })
    
  }
  limparCampos(){
    this.name = '';
    this.email = '';
    this.telefone = '';
    this.id = '';
    this.tipo = undefined;
  }

}
