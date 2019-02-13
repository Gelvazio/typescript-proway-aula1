import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  pages = [
    {
      title:'Home',
      url:'/admin',
      icon:'home'
    },
    {
      title:'Contas',
      url:'/admin/contas/list',
      icon:'wallet'
    },
    {
      title:'Categorias',
      url:'/admin/categorias/list',
      icon:'link'
    },
    {
      title:'Profile',
      url:'/admin/profile/view',
      icon:'person'
    },
    {
      title:'Preferencias',
      url:'/configuracoes',
      icon:'options'
    }
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private authService:AuthenticationService,
    private database:DatabaseService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
     return this.database.createDatabase()
    })
    .then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe((state)=>{
        if(state){
          this.router.navigate(['/','admin','home'])
        }else{
          this.router.navigate(['/','login'])
        }
      })
    }).catch(()=>{
      console.log('não foi possível criar a base de dados');
    });
  }

  exit(){
    if(navigator['app']){
      navigator['app'].exitApp();
    }
  }
}
