import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl ='http://localhost:59164/api/';
  private currentUserSource= new ReplaySubject < User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

    login(model:any){

      return this.http.post(this.baseUrl + 'auth/login', model).pipe(
        map((response:User)=>{
          const user= response;
          if(user)
          {
            localStorage.setItem('user',JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      )

    }
    register(model:any){

      return this.http.post(this.baseUrl + 'auth/register', model).pipe(
        map((user :User)=>{
    
          if(user)
          {
            localStorage.setItem('user',JSON.stringify(user));
            this.currentUserSource.next(user);
          }
          return user;  
        })
      )

    }
    setCurrenUser(user:User){
      this.currentUserSource.next(user);

    }
    logOUt(){
      localStorage.removeItem('user');
      this.currentUserSource.next(null);
    }
   
}
