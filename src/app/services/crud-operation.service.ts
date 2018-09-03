import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationsService {

  constructor(private http: HttpClient) { }
  
  //Connection to add Data
  public addData(data) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post("http://localhost:4020/users/add_data", { "data": data }, httpOptions);
  }

  //Connection to read Data
  public readData(name) {
    return this.http.get(`http://localhost:4020/users/${name}`);
  }

  //Connection to update Data
  public updateData(name, data) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.patch(`http://localhost:4020/users/${name}`, { "data": data }, httpOptions);
  }

  //Connection to delete Data
  public deleteData(name) {
    return this.http.delete(`http://localhost:4020/users/${name}`);
  }
}
