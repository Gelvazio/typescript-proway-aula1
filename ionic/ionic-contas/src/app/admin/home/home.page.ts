import { Component, OnInit } from '@angular/core';
import {from } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CategoriasService } from '../categorias/categorias.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categorias = [];

  constructor(private api:ApiService, private service: CategoriasService){}
  ngOnInit(){
    // from(this.api.get('http://192.168.1.5:3000/api/v1/usuarios'))
    // .subscribe(res=>{
    //   this.users = res;
    // })
    /*from(this.service.getAll())
    .subscribe((res)=>{
      this.categorias = res;
    })*/
    
  }

  ionViewWillEnter() {
    from(this.service.getAll())
     .subscribe((res)=>{
        this.categorias = res;
     })
  }

}
