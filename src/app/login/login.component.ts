import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private service:AuthService, private route:Router){}
  ngOnInit(): void {
  }
  loginForm:FormGroup  = new FormGroup({
    email : new FormControl("",[Validators.required, Validators.email]),
    pwd : new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(15)])
  });

  isUserValid: boolean = false;

  Login(){
      this.service.login([this.loginForm.value.email,this.loginForm.value.pwd]).subscribe(res =>{
        if(res == 'Success'){
          this.isUserValid = true;
          this.route.navigate(['/Home']);
          // this.route.navigate(['']);
        }
        else{
          this.isUserValid = false;
          alert("Login Unsuccessful");

        }
      })
  }

  //Get Method
  get Email():FormControl{
    return this.loginForm.get('email') as FormControl;
  }
  get Pwd():FormControl{
    return this.loginForm.get('pwd') as FormControl;
  }

}
