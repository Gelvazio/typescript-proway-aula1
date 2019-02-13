import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite: SQLite) { }

  public getDB() {
    return this.sqlite.create({
      name: 'cobrafacil.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {
        this.createTables(db);
        this.insertDefaultItems(db);
      })
      .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
    const sqlCategorias = `
      CREATE TABLE IF NOT EXISTS categorias(
        oid integer primary key AUTOINCREMENT,
        nome varchar(255) not null,
        updatedAt datetime not null
      )
    `;

    const sqlContas = `
      CREATE TABLE IF NOT EXISTS contas(
        oid integer primary key AUTOINCREMENT,
        oidUsuario integer not null,
        oidCategoria integer not null,
        descricao TEXT not null,
        valor decimal(10,2) not null,
        updatedAt datetime not null
      )
    `;

    db.sqlBatch([
      [
        sqlCategorias,
        sqlContas
      ]
    ])
      .then(() => console.log('tabelas criadas'))
      .catch(e => console.error('Falha ao criar as tabelas', e));
  }

  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('select COUNT(oid) as qtd from categorias', [])
      .then((data: any) => {

        if (data.rows.item(0).qtd == 0) {
          db.sqlBatch([
            ['insert into categorias (nome,updatedAt) values (?,?)', ['CONTA FIXA', "datetime('now')"]]
          ])
            .then(() => console.log('Dados incluídos com sucesso!'))
            .catch(e => console.error('Falha ao incluir os dados', e));
        }
      })
      .catch(e => console.error('Erro ao consultar a qtd de categorias', e));
  }


}
