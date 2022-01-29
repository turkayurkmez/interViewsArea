import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHideComponent } from './show-hide/show-hide.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './Q80/task/task.component';
import { WeatherComponent } from './Q97/weather/weather.component';
import { ProjectPercentComponent } from './Q95/project-percent/project-percent.component';
import { Q93Component } from './Q93/q93/q93.component';


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
