import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Storage} from "@ionic/storage";
import { Platform } from "@ionic/angular";
import { Credential} from "../credential";
const TOKEN_KEY = 'token-key';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt:Platform) { }

  login(credential:Credential){
    this.storage.set(TOKEN_KEY, 'Bearer 9998887776655aqs')
     .then(res => this.authenticationState.next(true))
  }
  logout(){
    this.storage.remove(TOKEN_KEY)
     .then(res => this.authenticationState.next(false))
  }

  isAuthenticated(){
    return this.authenticationState.value;
  }

  checkToken(){
    return this.storage.get(TOKEN_KEY)
     .then(res => {
       if(res) {
         this.authenticationState.next(true)
       }
     })
  }
}
