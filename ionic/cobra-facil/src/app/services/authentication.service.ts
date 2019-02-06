import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Storage} from "@ionic/storage";
import { Platform } from "@ionic/angular";
import { Credential} from "../credential";
import { HttpClient } from '@angular/common/http';
import { HOST, PORT }  from "../Constants";

const TOKEN_KEY = 'token-key';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage, 
    private plt:Platform,
    private http: HttpClient
  ) { }

  login(credential:Credential){
    this.http.post<any>(`http://${HOST}:${PORT}/api/v1/usuarios/autenticar`, credential)
     .subscribe((result) => {
       Promise.all([
        this.storage.set(TOKEN_KEY, result.token),
        this.storage.set('userName', result.usuario.nome),
       ])
      .then(res => this.authenticationState.next(true))
    }, (err) => {
      console.log(err);
    })
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
