import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import {AccountService} from '../services/account.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={};



  constructor(public accountservice: AccountService) { }

  ngOnInit(): void {
    
   
  }
  login (){
    console.log("this.model",this.model);
    this.accountservice.login(this.model).subscribe(response =>{
      console.log("response",response);
     
    },error=>{
      console.log(error);
    });

  }
  logOut(){
    this.accountservice.logOUt();
    
  }
 

}
