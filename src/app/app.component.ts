import { Component } from '@angular/core';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: number;
  name: string;
  age: number;
  country: string;

  constructor(private service: CrudService) {

  }
  //ADD
  public onAdd() {
    console.log("ADD BUTTON");
    const data = { id: this.id, name: this.name, age: this.age, country: this.country };
    this.service.onAdd(data).subscribe((response: any) => {
      console.log("Response: ", response);
      if (response.success) {
        alert(response.message);
        this.id = null;
        this.name = null;
        this.age = null;
        this.country = null;
      } else alert(response.error);
    });
  }
  //READ
  public onRead() {
    console.log("READ BUTTON");
  }
  //UPDATE
  public onUpdate() {
    console.log("UPDATE BUTTON");
  }
  //DELETE 
  public onDelete() {
    console.log("DELETE BUTTON");
  }

}
