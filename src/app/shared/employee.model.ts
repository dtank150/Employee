export class Employee {
  id:number=0;
  firstName:string;
  lastName:string = '';
  email:string = '';
  age:number;
  doj: any;
  gender:string='male';
  isMarried:number;
  isActive: number;
  designationID:number=0;
  designation: string='';
}

export class Desigation{
  id:number=0;
  designation:string='';
}
