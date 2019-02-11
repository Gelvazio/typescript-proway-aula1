import { Component, OnInit } from '@angular/core';
import { ContasService } from '../contas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private service: ContasService) { }
  public data = [];
  ngOnInit() {
    this.loadData();
  }
  
  loadData(){
    this.service.list().then(res => this.data = res);
  }

}
