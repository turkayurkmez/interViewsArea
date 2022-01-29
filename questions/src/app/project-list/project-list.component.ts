import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor() { }
   
  projects:Project[] = [
    new Project(1, "Project X","Description of project X"),
    new Project(2, "Project Y","Description of project Y"),
    new Project(3, "Project Z","Description of project Z"),

  ]



  ngOnInit(): void {
  }

}
