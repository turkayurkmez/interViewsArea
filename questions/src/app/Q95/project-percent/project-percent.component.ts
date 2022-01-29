import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-project-percent',
  templateUrl: './project-percent.component.html',
  styleUrls: ['./project-percent.component.css']
})
export class ProjectPercentComponent implements OnInit {

  constructor() { }
  project: Project = new Project(1, "SPA Projects",0.34);
  ngOnInit(): void {
  }

}
