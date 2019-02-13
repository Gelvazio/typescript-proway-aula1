import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Categoria } from '../categoria';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.page.html',
  styleUrls: ['./categoria-form.page.scss'],
})
export class CategoriaFormPage implements OnInit {

  categoria = new Categoria();
  constructor(
    private service: CategoriasService,
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  save(){
    if(this.categoria.nome && this.categoria.nome.trim().length > 3) {
      this.categoria.updatedAt = new Date();
      this.service.insert(this.categoria)
        .then(async () => {
          const toast = await this.toastController.create({
            message: 'Categoria criada com sucesso!',
            duration: 2000
          });
        await toast.present();
          this.router.navigateByUrl('/admin/categorias/list')
        })
    }
  }

}
