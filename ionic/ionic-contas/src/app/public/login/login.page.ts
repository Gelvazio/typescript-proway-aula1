import { Component, OnInit } from '@angular/core';
import { Credential } from 'src/app/credential/credential';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public credential:Credential = {
    email:'contato@mauricioschmitz.com.br',
    senha:'123456'
  }
  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.credential);
  }

}
