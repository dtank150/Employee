import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, Desigation } from '../shared/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  empUrl:string='https://localhost:44357/api/Employee';
  desigationUrl:string='https://localhost:44357/api/Designation';
  listEmployee:Employee[]=[];
  listDesignation:Desigation[]=[];

  employeeData:Employee=new Employee();

  SaveEmployee(){
    return this.http.post(this.empUrl,this.employeeData);
  }
  UpdateEmployee(){
    return this.http.put(`${this.empUrl}/${this.employeeData.id}`,this.employeeData);
  }
  GetEmployee():Observable<Employee[]>
  {
      return this.http.get<Employee[]>(this.empUrl);
  }
  GetDesignation():Observable<Desigation[]>{
    return this.http.get<Desigation[]>(this.desigationUrl);
  }
  DeleteEmployee(id:number){
      return this.http.delete(`${this.empUrl}/${id}`);
  }
}
