import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudService {  
  private port: Number;

  constructor(private http: HttpClient) { 
    this.port = 4101;
  }

  public onAdd(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`http://localhost:4100/user/add`, {"data": data}, httpOptions);

  }
  public onRead(id){
    return this.http.get(`http://localhost/4100/user/${id}`);
    
  }
  public onUpdate(id, data){
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.patch(`http://localhost/4100/user/${id}`, {"data": data}, );
  }
  public onDelete(id){
    return this.http.delete(`http://localhost:4100/user/${id}`);
  }
}
