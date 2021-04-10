import { Component, OnInit } from '@angular/core';
import { EmployeeLetters } from '../constants/constant';
import { Employee } from '../models/Employee';
import { EmployeeFilter, Filter } from '../models/EmployeeFilter';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  employees: Array<Employee> = [];
  filters:EmployeeFilter = new EmployeeFilter({});
  filteredEmployees=[];
  letters = EmployeeLetters;
  formShow: boolean = false;
  flag: boolean = true;
  activeEmployeeData:Array<Employee>=[];
  employeeCardShow: boolean = false;cardOpen:boolean = false;
  selectedFilter: string = 'Preferred Name';
  searchedInput: string = '';
  constructor() { }

openEForm(){
  this.activeEmployeeData=[];
  this.formShow=true;
}
  
closeForm(){
  this.formShow=false;
  this.cardOpen=false;
}
  
formSubmit(employeeData) { 
  this.employees.map(employee => {      if (employee.id === employeeData.id) {  employee.id=employeeData.id, employee.firstName= employeeData.firstName, employee.lastName= employeeData.lastName,employee.email= employeeData.email, employee.jobTitle=employeeData.jobTitle,employee.office= employeeData.office, employee.department=employeeData.department,employee.phone=employeeData.phone,employee.skype=employeeData.skype;     this.flag=false;      }    });
  if(this.flag){
    var employee= new Employee({ id: employeeData.id, firstName: employeeData.firstName, lastName: employeeData.lastName,email: employeeData.email, jobTitle:employeeData.jobTitle,office: employeeData.office, department:employeeData.department,phone:employeeData.phone,skype:employeeData.skype,preferredName:employeeData.firstName+" "+employeeData.lastName});
    this.employees.push(employee);  
  }  
    this.filteredEmployees=this.employees;
    this.getFilters();
    this.employeeCardShow=true;
    this.flag=true;
    this.closeForm();
 }
  
 getFilters(){
  this.filters.departments=this.employees.map(employee => new Filter({ value: employee.department, count:this.employees.filter(cnt => cnt.department == employee.department).length}));
  this.filters.departments=this.displayUniqueFilters(this.filters.departments);
  this.filters.offices=this.employees.map(employee => new Filter({ value: employee.office, count:this.employees.filter(cnt => cnt.office == employee.office).length}));
  this.filters.offices=this.displayUniqueFilters(this.filters.offices);
  this.filters.jobTitles=this.employees.map(employee => new Filter({ value: employee.jobTitle, count:this.employees.filter(cnt => cnt.jobTitle == employee.jobTitle).length}));
  this.filters.jobTitles=this.displayUniqueFilters(this.filters.jobTitles);
 }
  
 displayUniqueFilters(array){
  var flags = {};
  var newFilter = array.filter(function(filterPresent) {
      if (flags[filterPresent.value]) {
          return false;
      }
      flags[filterPresent.value] = true;
      return true;
  });
  return newFilter;
 }
  
searchByletter(input){
  input=input.toLowerCase();
  this.filteredEmployees = this.employees.filter(employee => {      if ((employee.firstName.toLowerCase().charAt(0) == input && this.selectedFilter=='First Name')||(employee.lastName.toLowerCase().charAt(0) == input && this.selectedFilter=='Last Name')||(employee.email.toLowerCase().charAt(0) == input && this.selectedFilter=='Email')||(employee.jobTitle.toLowerCase().charAt(0) == input && this.selectedFilter=='Job Title')||(employee.office.toLowerCase().charAt(0) == input && this.selectedFilter=='Office')||(employee.department.toLowerCase().charAt(0) == input && this.selectedFilter=='Department')||(employee.preferredName.toLowerCase().charAt(0) == input && this.selectedFilter=='Preferred Name')) {        return employee;      }     }); 
  this.employeeCardShow=true;
}
  
filterEmployees(selectedFilter){
  this.filteredEmployees = this.employees.filter(employee => {      if ((employee.department == selectedFilter)||(employee.office == selectedFilter)||(employee.jobTitle == selectedFilter)) {        return employee;      }     }); 
  this.employeeCardShow=true;
}
  
clearData(){
  this.filteredEmployees=this.employees;
  this.employeeCardShow=true;
}
  
selectFilter (event) {
  this.selectedFilter = event.target.value;
}
  
searchEmployee(event){
  this.searchedInput=event.target.value;
  this.filteredEmployees = this.employees.filter(employee => {      if ((employee.firstName.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedFilter=='First Name')||(employee.lastName.toLowerCase().includes(this.searchedInput.toLowerCase())&& this.selectedFilter=='Last Name')||(employee.email.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedFilter=='Email')||(employee.jobTitle.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedFilter=='Job Title')||(employee.office.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedFilter=='Office')||(employee.department.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedFilter=='Department')||(employee.preferredName.toLowerCase().includes(this.searchedInput.toLowerCase()) && this.selectedFilter=='Preferred Name')) {        return employee;      }     }); 
  this.employeeCardShow=true;
}
  
openEmployeeCard(phn){
  this.activeEmployeeData=this.employees.filter(emp=>{ if(emp.phone==phn){return emp;}});
  this.formShow=true;
}
  
noEmployeePresent(){
  if(!this.employeeCardShow){
    return true;
  }
}
  
  ngOnInit(): void {
  }
}
