import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { Employee } from '../shared/employee.model';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public service:EmployeeService, public datepipe:DatePipe, public toast:ToastrService, public router:Router){}
  @ViewChild(EmployeeFormComponent)emp:EmployeeFormComponent;
  ngOnInit(): void {
    this.service.GetEmployee().subscribe(data=>{
      this.service.listEmployee = data;
    });
  }

  Update(employee:Employee){
    console.log(employee);
    let df = this.datepipe.transform(employee.doj, 'yyyy-MM-dd');
    employee.doj=df;
    console.log(employee.doj);
    this.service.employeeData = employee;

    if(this.emp.isSlide==='off'){
      this.emp.hideshow();
    }

  }

  Delete(id:number){
    if(confirm('Are You Sure To Delete This Record?')){
      this.service.DeleteEmployee(id).subscribe(data=>{
        this.toast.error('Record Deleted!!');
        // console.log("Record Deleted....");
        this.service.GetEmployee().subscribe(data=>{
          this.service.listEmployee = data;
        });
        },
        err=>{
          this.toast.error('Record Not Deleted!!');
          // console.log('Record Not Deleted...');
        });
    }
  }

}
