import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @Input() project:Project = new Project(); 
  ngOnInit(): void {

  }
     

}
