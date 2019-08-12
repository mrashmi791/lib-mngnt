import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api/api.service'
import { Employee, Update } from 'src/app/models/employeelist.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employee: Employee[] = [];
  updateEmp = new Update;
  isAdd: boolean = false;

  apiURL: string = 'http://dummy.restapiexample.com/api/v1/employees';
  updateKey: string = '	http://dummy.restapiexample.com/api/v1/update/';
  deleteKey: string = 'http://dummy.restapiexample.com/api/v1/delete/';
  createKey: string = 'http://dummy.restapiexample.com/api/v1/create';
  employeeObj = new Employee();
  selectedEmployee = new Employee();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getEmpList();
  }

  getEmpList(): void {
    this.apiService.getNews(this.apiURL).subscribe(data => {
      console.log(data);
      this.employee = data;
      this.employee = this.employee.slice(0, 9);
    });
  }

  selectEmployee(emp: Employee): void {
    console.log(emp);
    this.selectedEmployee = emp;
    this.isAdd = false;
  }

  /**
   * 
   */
  updateEmployee(): void {

    this.updateEmp.age = this.selectedEmployee.employee_age;
    this.updateEmp.name = this.selectedEmployee.employee_name;
    this.updateEmp.salary = this.selectedEmployee.employee_salary;
    if(this.isAdd) {
      this.createEmployee();
    } else {
      this.apiService.updateEmployee(this.updateKey + this.selectedEmployee.id, this.updateEmp).subscribe(data => {
        console.log(data);
        this.selectedEmployee = new Employee();
      });
    }
   

  }

  deleteEmployee(emp: Employee, index: number) {
    this.apiService.deleteEmployee(this.deleteKey + emp.id).subscribe(data => {
      console.log(data);
      this.employee.splice(index, 1);
      // this.getEmpList();
    });
  }

  createEmployee() {
    this.apiService.createEmployee(this.createKey, this.updateEmp).subscribe(data => {
      console.log(data);
      let tempEmp = new Employee();
      // tempEmp.employee_age = data.age;
      // tempEmp.employee_name = data.name;
      // tempEmp.employee_salary = data.salary;
      // tempEmp.id = data.id;
// Both are same....!!
      tempEmp = {
        employee_age: data.age,
        employee_name: data.name,
        employee_salary: data.salary,
        id: data.id
      }

      this.employee.push(tempEmp);

      this.selectedEmployee = new Employee();

    })
  }

  resetEmpObj(): void {
    this.selectedEmployee = new Employee();
  }

  setAddFlag(): void {
    this.isAdd = true;
  }
}
