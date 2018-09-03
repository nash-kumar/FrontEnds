import { Component } from '@angular/core';
import { CrudOperationsService } from './services/crud-operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  name: string;
  email: string;
  mobile: number;
  country: string;

  constructor(private service: CrudOperationsService) {

  }
//function to add data
  public onAdd(){
    console.log('ADD BUTTON');
    const data = {first_Name: this.name, email: this.email, phoneNumber: this.mobile, country: this.country};
    this.service.addData(data).subscribe((response: any) => {
      console.log("Response:", response);
      if (response.success) {
        alert(response.message);
        this.name = null;
        this.email = null;
        this.mobile = null;
        this.country = null;
      } else {
        alert(response.error);
      }
    });
  }

//function to read data
  public onRead(){
    console.log('READ BUTTON');
    this.service.readData(this.name).subscribe((response: any) => {
      console.log("Response:", response);
      if (response.sucess) {
        this.email = response.result.email;
        this.mobile = response.result.phoneNumber;
        this.country = response.result.country;
        alert(response.message); 
      } else {
        alert(response.message);
        this.name = null;
      }
    }, (err) => {
      alert(err.message);
      this.name = null;
    })
  }

//function to update data
  public onUpdate(){
    console.log('UPDATE BUTTON');
    const data = {
      "country": this.country,
      "phoneNumber": this.mobile,
      "email": this.email
    }
    this.service.updateData(this.name, data).subscribe((response: any) => {
      console.log("Resone: ", response);
      if (response.success) { 
        this.name = null;
        this.email = null;
        this.mobile = null;
        this.country = null;       
        alert(response.message);
      } else {        
        alert(response.message);
      }
    }, (err) => {
      alert(err.message)
    });
  }

//function to delete data
  public onDelete(){
    console.log('DELETE BUTTON');
    this.service.deleteData(this.name).subscribe((response: any) => {
      if (response.success) {
        this.name = null;
        this.email = null;
        this.mobile = null;
        this.country = null;   
        alert(response.message)
      } else {
        alert(response.message);
      }
    }, (err) => {
      alert(err.message)
    });
  }
}


