import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  current: BehaviorSubject<any> = new BehaviorSubject(null);
  baseUrl = "https://localhost:44357/api/User/";

  register(user:Array<String>){
    return this.http.post(this.baseUrl+ "Register",{
      FirstName: user[0],
      LastName: user[1],
      Email: user[2],
      Password: user[3],
      Mobile: user[4],
      Gender: user[5],
    },{
      responseType: 'text',
    });
  }
  login(info:Array<String>){
    return this.http.post(this.baseUrl+"Login",{
      Email: info[0],
      Pwd: info[1],
    },{
      responseType:'text',
    })
  }
}
