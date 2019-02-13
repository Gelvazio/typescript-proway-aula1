import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreService } from './store.service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
    private store: StoreService) { }

  private async getHeaders() {
    const headers = {
      "Content-type": "application/json",
      "accept": "application/json"
    }
    const token = await this.store.getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return Promise.resolve(headers);
  }

  async get(path: string): Promise<any>{
    const options = {
      headers: await this.getHeaders()
    }
    return this.http.get(path, options).toPromise();
  }
  async post(path: string, data: any):Promise<any> {
    const options = {
      headers: await this.getHeaders()
    }
    return this.http.post(path, data, options).toPromise();
  }
  async put(path: string, data: any):Promise<any> {
    const headers = await this.getHeaders();
    const options = {
      headers
    }
    return this.http.put(path, data, options).toPromise();
  }

  async remove(path: string):Promise<any> {
    const options = {
      headers: await this.getHeaders()
    }
    return this.http.delete(path, options).toPromise();
  }
}
