import { Injectable } from '@angular/core';
import Aluno from './aluno';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  getAlunos(): Observable<Aluno[]>{

    return this.httpClient.get<Aluno[]>('/api/alunos');
  }

  salvar(aluno:Aluno){
    if(!aluno.id){
      return this.httpClient.post('api/alunos', aluno);
    }
  }
}
