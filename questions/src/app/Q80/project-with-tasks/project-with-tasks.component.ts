import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-project-with-tasks',
  templateUrl: './project-with-tasks.component.html',
  styleUrls: ['./project-with-tasks.component.css']
})
export class ProjectWithTasksComponent implements OnInit, AfterContentChecked {

  incompletedTaskCount?: number;
  project: Project = new Project(1, "Project A", "Description of project a", [
    new Task(1, "Task 1", false),
    new Task(2, "Task 2", false),
    new Task(3, "Task 3", false)
  ])
  constructor() { }
  ngAfterContentChecked(): void {
    this.incompletedTaskCount = this.project.tasks?.filter(t => !t.isDone).length;
  }

  ngOnInit(): void {
    
  }

}
