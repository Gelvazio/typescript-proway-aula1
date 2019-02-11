import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Credential } from 'src/app/credential';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credential: Credential = {email: 'contato@mauricioschmitz.com.br', senha: 123456}
  constructor(
    private service: AuthenticationService,
    private router: Router,
    private menuController: MenuController
  ) { }
  ngOnInit() {
    this.menuController.enable(false,'first')
  }

  login(){
    this.service.login(this.credential)
    //this.router.navigate(['/','admin'])
  }
}
