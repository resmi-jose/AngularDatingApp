import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hi ,this is resmi jose';
  checkusers:any;


constructor(private http :HttpClient){}

ngOnInit(){
  this.getUser();

}
getUser(){
  this.http.get('http://localhost:59164/api/user').subscribe(response=>{
    this.checkusers = response;

  },error =>{
      console.log(error);
  })
}

}
