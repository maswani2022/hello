import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  reactiveForm: FormGroup;
  message = true;
  contacts = [
    {
      'firstname' : 'hel',
      'lastname' : '2',
      'contactid' : 2
    },
    {
      'firstname' : 'qw',
      'lastname' : '3',
      'contactid' : 3
    },
    {
      'firstname' : 'ere',
      'lastname' : '4',
      'contactid' : 56
    }
  ]
  course = [
    {id: 1, name: 'SQL'},
    {id: 2, name: 'SL'},
    {id: 3, name: 'SS'},
    {id: 4, name: 'JS'},
  ];

  flag: boolean;
  date;
  isSpl=true;
  courses = []
  source = "/assets/1.png";
  searchValue;
  constructor(private router: Router) {
  }
  ngOnInit(){
    this.flag = true;
    this.date = 12/1/1990;
this.reactiveForm = new FormGroup({
firstname: new FormControl(null),
lastname: new FormControl(null),
gender: new FormControl(null)
})
  }
  onSubmit(){
    console.log('hello')
  }
  submit(){
    console.log(this.reactiveForm)
  }
  nav(){
    this.flag = false;
  this.router.navigate(['/loans']);
  }
addarray(){
  this.course.push({id: 4, name: 'node'})
}
remove(course){
let index = this.course.indexOf(course);
console.log(index)
this.course.splice(index, 1);
alert('we remove index')
// this.dialog.close({resut: "ok"});
}
}

