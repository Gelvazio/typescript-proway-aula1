import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
/* Serviço para demonstração da api de Storage */
export class StoreService {

  constructor(private storage:Storage) { }

  async getToken(){
    return await this.storage.get(TOKEN_KEY);
  }
  async setToken(token:string){
    return await this.storage.set(TOKEN_KEY,token);
  }

  async clearToken(){
    return await this.storage.remove(TOKEN_KEY);
  }
}


