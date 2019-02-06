import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST, PORT }  from "../../Constants";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(private http: HttpClient, private storage: Storage) { }
  public data = [];
  ngOnInit() {
  }

  loadData(){
    this.storage.get('token-key').then((res) => {
      const token = res;
      const httpOptions = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + token
        }
      }
      this.http.get<any>(`${HOST}:${PORT}/api/v1/categorias`, httpOptions).subscribe((result) => {
        this.data = result;
      })
    })
    
  }
}
