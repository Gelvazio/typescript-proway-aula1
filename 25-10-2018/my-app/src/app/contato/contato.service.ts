import { Injectable } from '@angular/core';
import Contato, { Tipo } from './contato';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos = [new Contato(1, 'João', 'joao@joao.com', '99999999', Tipo.FAMILIA)];

  constructor(private httpClient: HttpClient) { }

  getContatos(): Observable<Contato[]>{

    return this.httpClient.get<Contato[]>('/api/contatos');
  }

  buscarContatoPorId(id:string):Observable<Contato> {
    return this.httpClient.get<Contato>(`/api/contatos/${id}`);
  }

  salvar(contato:Contato){
    if(!contato.id){
      return this.httpClient.post('api/contatos', contato);
    } else {
      return this.httpClient.put(`api/contatos/${contato.id}`, contato);
    }
  }

}
