import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  students: Student[] = [
    new Student(1,'Michael',new Date(2022,0,30)),
    new Student(2,'Jane',new Date(2021,9,30)),
    new Student(3,'Anne',new Date(2021,8,15))


  ]
  ngOnInit(): void {
  }


}
