import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHideComponent } from './Q72/show-hide/show-hide.component';
import { SearchComponent } from './Q73/search/search.component';

import { TodoListComponent } from './Q74-78/todo-list/todo-list.component';
import { ProjectListComponent } from './Q79/project-list/project-list.component';
import { ProjectComponent } from './Q79/project/project.component';


import { TaskComponent } from './Q80/task/task.component';
import { WeatherComponent } from './Q97/weather/weather.component';
import { ProjectPercentComponent } from './Q95/project-percent/project-percent.component';
import { Q93Component } from './Q93/q93/q93.component';
import { ShowSquareComponent } from './Q92/show-square/show-square.component';
import { ProductComponent } from './Q88/product/product.component';
import { EmployeeComponent } from './Q86/employee/employee.component';
import { UserRegisterComponent } from './Q85/user-register/user-register.component';

import { CategoryMenuComponent } from './Q82/category-menu/category-menu.component';
import { StudentListComponent } from './Q81/student-list/student-list.component';
import { SortPipe } from './Q81/sort.pipe';
import { LoginComponent } from './Q83/login/login.component';
import { ProjectWithTasksComponent } from './Q80/project-with-tasks/project-with-tasks.component';





@NgModule({
  declarations: [
    AppComponent,
    ShowHideComponent,
    SearchComponent,
    TodoListComponent,
    ProjectListComponent,
    ProjectComponent,
    TaskComponent,
    WeatherComponent,
    ProjectPercentComponent,
    Q93Component,
    ShowSquareComponent,
    ProductComponent,  
    EmployeeComponent, 
    UserRegisterComponent,

    CategoryMenuComponent,
    StudentListComponent,
    SortPipe,
    LoginComponent,
    ProjectWithTasksComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
