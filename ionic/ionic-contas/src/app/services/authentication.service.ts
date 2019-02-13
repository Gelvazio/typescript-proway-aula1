import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from './store.service';
import { ApiService } from './api.service';
import { Credential } from '../credential/credential';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private store: StoreService, private api:ApiService) { }

  login(credential:Credential){
    this.api.post('http://10.72.22.15:3000/api/v1/usuarios/autenticar',credential)
    .then(res =>{
      return this.store.setToken(res.token)
    })
    .then(res => this.authenticationState.next(true))
  }

  logout(){
    this.store.clearToken()
    .then(res => this.authenticationState.next(false))
  }

  isAuthenticated(){
    return this.authenticationState.value;
  }

  checkToken(){
    return this.store.getToken()
    .then(res => {
      if(res){
        this.authenticationState.next(true)
      }
    })
  }
}
