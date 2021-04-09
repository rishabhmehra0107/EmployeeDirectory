import { Component, OnInit,Output,Input ,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../models/Employee';


@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    show=false;
    @Output() formSubmit:EventEmitter<any>= new EventEmitter()
    @Output()  closeForm:EventEmitter<any>= new EventEmitter()
    @Input() employee:Array<Employee>=[];
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
          id:[this.employee.length>0 ? this.employee[0].id:Date.now()],
            firstName: [this.employee.length>0 ? this.employee[0].firstName:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            lastName: [this.employee.length>0 ? this.employee[0].lastName:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            email: [this.employee.length>0 ? this.employee[0].email:'', [Validators.required, Validators.email]],
            jobTitle: [this.employee.length>0? this.employee[0].jobTitle:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            office: [this.employee.length>0 ? this.employee[0].office:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            department: [this.employee.length>0 ? this.employee[0].department:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
            phone: [this.employee.length>0 ? this.employee[0].phone:'', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            skype: [this.employee.length>0? this.employee[0].skype:'', [Validators.required, Validators.email]]
        }, {
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        this.formSubmit.emit(this.registerForm.value);
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
        this.closeForm.emit();
        }
      
    }
