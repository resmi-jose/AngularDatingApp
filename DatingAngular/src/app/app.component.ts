import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hi ,this is resmi jose';
  checkusers:any;
  values: any;


constructor(private accountservice :AccountService){}

ngOnInit(){

  this.setCurrentUser();

}
setCurrentUser(){
  const user : User = JSON.parse(localStorage.getItem('user'));
  this.accountservice.setCurrenUser(user);
}


}
