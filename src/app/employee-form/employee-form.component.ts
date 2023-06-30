import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{
  constructor(public services:EmployeeService, public toast:ToastrService){}
  @ViewChild('checkbox1') checkBox:ElementRef;
  isSlide:string='off';
  ngOnInit(): void {
    this.services.GetDesignation().subscribe(res=>{
      this.services.listDesignation=res;
    });
  }

  Submit(form:NgForm){
    this.services.employeeData.isMarried = form.value.isMarried== true?1:0;
    this.services.employeeData.isActive = form.value.isActive== true?1:0;
    if(this.services.employeeData.id==0)
        this.Add(form);
    else
      this.Update(form);
    // console.log('Hello');

  }
  Add(form:NgForm){
    this.services.SaveEmployee().subscribe(d=>{
      this.Reset(form);
      this.Refresh();
      this.toast.success('Success','Record Save!!');
      // console.log('Save Success');

    });
  }

  Update(form:NgForm){
    this.services.UpdateEmployee().subscribe(d=>{
      this.Reset(form);
      this.Refresh();
      // console.log('Update Success');
      this.toast.warning('Update','Record Updated!!');
    });

  }

  Reset(form:NgForm){
    form.form.reset(form.value);
    this.services.employeeData = new Employee();
    this.hideshow();
  }

  Refresh(){
    this.services.GetEmployee().subscribe(res=>{
      this.services.listEmployee = res;
    });
  }

  hideshow(){
    if(this.checkBox.nativeElement.checked){
      this.checkBox.nativeElement.checked = false;
      this.isSlide='off';
    }
    else{
      this.checkBox.nativeElement.checked = true;
      this.isSlide='on';

    }
  }
}
