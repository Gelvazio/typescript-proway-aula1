import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST, PORT }  from "../../Constants";
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

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
        this.http.get<any>(`http://${HOST}:${PORT}/api/v1/categorias`, httpOptions).subscribe((result) => {
          resolve(result);
        })
      })
    });
    
  }

  addItem(value){
    return new Promise((resolve, reject) => {
      this.storage.get('token-key').then((res) => {
        const token = res;
        const httpOptions = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }
        this.http.post<any>(`http://${HOST}:${PORT}/api/v1/categorias`,{descricao: value}, httpOptions).subscribe((result) => {
          resolve(result);
        })
      })
    });
  }

  editItem(item){
    return new Promise((resolve, reject) => {
      this.storage.get('token-key').then((res) => {
        const token = res;
        const httpOptions = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }
        this.http.put<any>(`http://${HOST}:${PORT}/api/v1/categorias/${item.oid}`,{descricao: item.descricao}, httpOptions).subscribe((result) => {
          resolve(result);
        })
      })
    });
  }

  deleteItem(item){
    return new Promise((resolve, reject) => {
      this.storage.get('token-key').then((res) => {
        const token = res;
        const httpOptions = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }
        this.http.delete<any>(`http://${HOST}:${PORT}/api/v1/categorias/${item.oid}`, httpOptions).subscribe((result) => {
          resolve(result);
        })
      })
    });
  }
}
