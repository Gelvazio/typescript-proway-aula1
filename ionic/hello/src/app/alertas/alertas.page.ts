import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  
  async showAlert01(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  async cancel(){
    const alert = await this.alertController.create({
      header: 'Cancel',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  async showAlert02(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [ {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          this.cancel();
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.showAlert01()
        }
      }]
    });

    await alert.present();
  }
}
