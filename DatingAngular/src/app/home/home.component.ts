import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registermode = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.getUser();
  }
  registerToggle(){
    this.registermode = ! this.registermode;
  }
 
  //cancelRegisterMode(registerMode:boolean){
    //this.registermode= registerMode;

  //}
 // getUser()
  //{
   // this.http.get('http://localhost:59164/api/user').subscribe(values =>this.values=values);
//}
  cancelRegister(event :boolean){
    this.registermode =event;

  }

}
