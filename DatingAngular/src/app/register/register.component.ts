import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // @Input() valuesfromHomeComponent:any;
  @Output() cancelRegister =new EventEmitter();
model :any={};
  constructor( private accountservice: AccountService) { }

  ngOnInit(): void {
  }
  register()
  {
    this.accountservice.register(this.model).subscribe(response =>{
      console.log("register",response);
      this.cancel();
    },error =>{
      console.log(error);
    })
    console.log(this.model);
  }
  cancel()
  {
  this.cancelRegister.emit(false);
  }

}
