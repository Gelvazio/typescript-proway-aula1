import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private database:DatabaseService){}
  
  public insert(categoria: Categoria) {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into categorias (nome,updatedAt) values (?, ?)';
        let data = [categoria.nome, "datetime('now')"];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public update(categoria: Categoria) {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update categorias set nome = ?, updatedAt = ? where  oid = ?';
        let data = [categoria.nome, categoria.updatedAt, categoria.id];
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public remove(id: number) {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from categorias where oid = ?';
        let data = [id];
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public get(id: number) {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from categorias where oid = ?';
        let data = [id];
 
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let categoria = new Categoria();
              categoria.id = item.id;
              categoria.nome = item.nome;
              categoria.updatedAt = item.updatedAt;
              return categoria;
            }
 
            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public getAll( ):Promise<any> {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT * from categorias';
        var data: any[] = [];
 
        
 
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let categorias: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                let categoria = data.rows.item(i);
                categorias.push(categoria);
              }
              return categorias;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}
 
