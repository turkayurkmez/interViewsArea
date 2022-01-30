import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWithTasksComponent } from './project-with-tasks.component';

describe('ProjectWithTasksComponent', () => {
  let component: ProjectWithTasksComponent;
  let fixture: ComponentFixture<ProjectWithTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectWithTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWithTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
