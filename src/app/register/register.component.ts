import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  rpwd: string = 'none';
  displayMsg: string ='';
  isAccountCreated:boolean = false;
  constructor(private service:AuthService){
  }
  ngOnInit(): void {
  }

  registerForm : FormGroup = new FormGroup({
    fname : new FormControl("",[Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    lname : new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    email : new FormControl("",[Validators.required,Validators.email]),
    pwd : new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    mobile : new FormControl("",[Validators.required,Validators.pattern("[0-9].*"),Validators.minLength(10),Validators.maxLength(10)]),
    gender : new FormControl("",Validators.required),
    rpwd : new FormControl("")
  });

  Register(){
    if(this.Pwd.value === this.Rpwd.value){
      console.log(this.registerForm.valid);
      this.rpwd = 'none'

      this.service.register([
        this.registerForm.value.fname,
        this.registerForm.value.lname,
        this.registerForm.value.email,
        this.registerForm.value.pwd,
        this.registerForm.value.mobile,
        this.registerForm.value.gender
      ]).subscribe(res =>{
        if(res == 'Success'){
          this.displayMsg = "Account Created Successfully";
          this.isAccountCreated = true;
        }
        else if(res == 'Alredy Exists'){
          this.displayMsg = "Account Alredy Exists!! Please Try To Another Email";
          this.isAccountCreated = false;
        }
        else{
          this.displayMsg = "Somthing Went Wrong";
          this.isAccountCreated = false;
        }
      })
    }
    else{
      this.rpwd = 'inline'
    }

  }
  //Get Method

  get FirstName():FormControl{
    return this.registerForm.get('fname') as FormControl;
  }
  get LastName():FormControl{
    return this.registerForm.get('lname') as FormControl;
  }
  get Email():FormControl{
    return this.registerForm.get('email') as FormControl;
  }
  get Pwd():FormControl{
    return this.registerForm.get('pwd') as FormControl;
  }
  get Rpwd():FormControl{
    return this.registerForm.get('rpwd') as FormControl;
  }
  get Mobile():FormControl{
    return this.registerForm.get('mobile') as FormControl;
  }
  get Gender():FormControl{
    return this.registerForm.get('gender') as FormControl;
  }

}
