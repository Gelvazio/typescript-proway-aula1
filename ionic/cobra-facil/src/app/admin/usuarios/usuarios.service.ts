import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { HOST, PORT }  from "../../Constants";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient, private storage: Storage) { }

  list():any{
    return new Promise((resolve, reject) => {
      this.storage.get('token-key').then((res) => {
        const token = res;
        const httpOptions = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }
        this.http.get<any>(`http://${HOST}:${PORT}/api/v1/usuarios`, httpOptions).subscribe((result) => {
          resolve(result);
        })
      })
    });
    
  }
}
