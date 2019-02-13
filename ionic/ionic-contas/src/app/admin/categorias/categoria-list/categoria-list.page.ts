import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Categoria } from '../categoria';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.page.html',
  styleUrls: ['./categoria-list.page.scss'],
})
export class CategoriaListPage implements OnInit {

  categorias:Array<Categoria> = [];
  constructor(
    private service: CategoriasService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    from(this.service.getAll())
     .subscribe((res)=>{
        this.categorias = res;
     })
  }

  goNew(){
    this.router.navigateByUrl('/admin/categorias/form')
  }
}
