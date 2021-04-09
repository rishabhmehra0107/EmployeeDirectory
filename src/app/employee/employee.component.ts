import { Component, OnInit } from '@angular/core';
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
  letters = [    {value: 'A'}, {value: 'B'}, {value: 'C'}, {value: 'D'}, {value: 'E'}, {value: 'F'}, {value: 'G'}, {value: 'H'}, {value: 'I'}, {value: 'J'}, {value: 'K'}, {value: 'L'}, {value: 'M'}, {value: 'N'}, {value: 'O'}, {value: 'P'}, {value: 'Q'}, {value: 'R'}, {value: 'S'}, {value: 'T'}, {value: 'U'}, {value: 'V'}, {value: 'W'}, {value: 'X'}, {value: 'Y'}, {value: 'Z'},];
  show: boolean = false;
  flag: boolean = true;
  errorOccurFirstName: boolean = false;errorOccurLastName: boolean = false;errorOccurEmail: boolean = false;errorOccurJobTitle: boolean = false;errorOccurOffice: boolean = false;errorOccurDepartment: boolean = false;errorOccurPhone: boolean = false;errorOccurSkypeId: boolean = false;
  employeeCardShow: boolean = false;cardOpen:boolean = false;
  regEx = /^[a-zA-Z ]+$/;  
  emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  phoneRegEx=/^(\+\d{1,3}[- ]?)?\d{10}$/;
  selectedFilter: string = 'Preferred Name';
  searchedInput: string = '';
  errorFirstName;errorLastName;errorEmail;errorJobTitle;errorOffice;errorDepartment;errorPhone;errorSkypeId;
  cardFirstName:string;cardLastName:string;cardEmail:string;cardJobTitle:string;cardOffice:string;cardDepartment:string;cardPhone:string;cardSkype:string;cardPreferredName:string;
  constructor() { }
openForm(){
  this.show=true;
}
closeForm(){
  this.show=false;
  this.cardOpen=false;
}
validateFirstName(firstname){
  if(firstname==null||firstname==''){
    this.errorFirstName="Required";
    this.errorOccurFirstName=true;
    this.flag=false;
  }
  else if(this.regEx.test(firstname)==false){
    this.errorFirstName="Enter letter and space only";
    this.errorOccurFirstName=true;
    this.flag=false;
    }
    else{
      this.errorOccurFirstName=false;
    }
}
validateLastName(lastname){
  if(lastname==null||lastname==''){
    this.errorLastName="Required";
    this.errorOccurLastName=true;
    this.flag=false;
  }
  else if(this.regEx.test(lastname)==false){
    this.errorLastName="Enter letter and space only";
    this.errorOccurLastName=true;
    this.flag=false;
    }
    else{
      this.errorOccurLastName=false;
    }
}
validateEmail(email){
  if(email==null||email==''){
    this.errorEmail="Required";
    this.errorOccurEmail=true;
    this.flag=false;
  }
  else if(this.emailRegEx.test(email)==false){
    this.errorEmail="Please enter valid email id";
    this.errorOccurEmail=true;
    this.flag=false;
  }
  else{
    this.errorOccurEmail=false;
  }
}
validateJobTitle(job){
  if(job==null||job==''){
    this.errorJobTitle="Required";
    this.errorOccurJobTitle=true;
    this.flag=false;
  }
  else if(this.regEx.test(job)==false){
    this.errorJobTitle="Enter letter and space only";
    this.errorOccurJobTitle=true;
    this.flag=false;
    }
    else{
      this.errorOccurJobTitle=false;
    }
}
validateOffice(offc){
  if(offc==null||offc==''){
    this.errorOffice="Required";
    this.errorOccurOffice=true;
    this.flag=false;
  }
  else if(this.regEx.test(offc)==false){
    this.errorOffice="Enter letter and space only";
    this.errorOccurOffice=true;
    this.flag=false;
    }
    else{
      this.errorOccurOffice=false;
    }
}
validateDepartment(dpt){
  if(dpt==null||dpt==''){
    this.errorDepartment="Required";
    this.errorOccurDepartment=true;
    this.flag=false;
  }
  else if(this.regEx.test(dpt)==false){
    this.errorDepartment="Enter letter and space only";
    this.errorOccurDepartment=true;
    this.flag=false;
    }
    else{
      this.errorOccurDepartment=false;
    }
}
validatePhone(phn){
  if(phn==null||phn==''){
    this.errorPhone="Required";
    this.errorOccurPhone=true;
    this.flag=false;
  }
  else if(this.phoneRegEx.test(phn)==false){
    this.errorPhone="Please enter valid contact number";
    this.errorOccurPhone=true;
    this.flag=false;
  }
  else{
    this.errorOccurPhone=false;
  }
}
validateSkype(skype){
  if(skype==null||skype==''){
    this.errorSkypeId="Required";
    this.errorOccurSkypeId=true;
    this.flag=false;
  }
  else if(this.emailRegEx.test(skype)==false){
    this.errorSkypeId="Please enter valid skype id";
    this.errorOccurSkypeId=true;
    this.flag=false;
  }
  else{
    this.errorOccurSkypeId=false;
  }
}
formSubmit(firstname,lastname,email,job,offc,dpt,phn,skype) {   
  this.flag=true;
 this.validateFirstName(firstname);
 this.validateLastName(lastname);
 this.validateEmail(email);
 this.validateJobTitle(job);
 this.validateOffice(offc);
 this.validateDepartment(dpt);
 this.validatePhone(phn);
 this.validateSkype(skype);
  if(this.flag){
    var employee= new Employee({firstName: firstname, lastName: lastname,email: email, jobTitle:job,office: offc, department:dpt,phone:phn,skype:skype,preferredName:firstname+" "+lastname});
    this.employees.push(employee);  
    this.filteredEmployees=this.employees;
    this.getFilters();
    this.employeeCardShow=true;
    this.flag=false;
    this.closeForm();
  }
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
  this.cardOpen=true;
  var employee=this.employees.filter(emp=>{ if(emp.phone==phn){return emp;}});
  this.cardFirstName=employee[0].firstName; this.cardLastName=employee[0].lastName; this.cardEmail=employee[0].email; this.cardJobTitle=employee[0].jobTitle; this.cardOffice=employee[0].office; this.cardDepartment=employee[0].department; this.cardPhone=employee[0].phone; this.cardSkype=employee[0].skype; this.cardPreferredName=employee[0].firstName+" "+employee[0].lastName; 
}
updateEmployee( updatedFirstName , updatedLastName , updatedEmail ,updatedJobTitle,updatedOffice,updatedDepartment,updatedPreferredName,updatedPhone,updatedSkype){
  this.filteredEmployees=this.employees.map(employee => {      if (employee.phone === this.cardPhone) { employee.firstName = updatedFirstName; employee.lastName = updatedLastName; employee.email = updatedEmail; employee.department = updatedDepartment; employee.jobTitle = updatedJobTitle; employee.office = updatedOffice; employee.phone = updatedPhone; employee.skype = updatedSkype;      }    });
  this.cardOpen = false;
  this.getFilters();
  this.clearData();
}
noEmployeePresent(){
  if(!this.employeeCardShow){
    return true;
  }
}
  ngOnInit(): void {
  }
}
