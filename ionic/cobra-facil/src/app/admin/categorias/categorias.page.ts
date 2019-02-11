import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(private service: CategoriaService,public alertController: AlertController) { }
  public data = [];
  public categoria
  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.service.list().then(res => this.data = res);
  }

  addItem(){
    this.service.addItem(this.categoria).then(res => this.categoria = null);
    this.loadData();
  }

  async editItem(item){
    const alert = await this.alertController.create({
      header: 'Editar',
      inputs: [
        {
          name: 'categoria',
          type: 'text',
          id: 'categoria',
          value: item.descricao,
          placeholder: 'Informa a descrição'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Excluir',
          role: 'danger',
          cssClass: 'danger',
          handler: () => {
            this.service.deleteItem(item).then(res => this.loadData());
          }
        }, {
          text: 'Ok',
          handler: (value) => {
            item.descricao = value.categoria;
            this.service.editItem(item).then(res => this.loadData());
          }
        }
      ]
    });
    await alert.present();
    
  }
}
