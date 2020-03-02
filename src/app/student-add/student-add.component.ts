import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder, Validators, FormControl} from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  angForm:FormGroup;

  ngOnInit() {
    this.angForm = new FormGroup({  
      StudentRollNo: new FormControl(Validators.required),  
      StudentName: new FormControl(Validators.required),  
      Percentage:new FormControl(Validators.required)  
    });
  }

  onSubmit(){
console.log(this.angForm);
  }
  }

