import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPercentComponent } from './project-percent.component';

describe('ProjectPercentComponent', () => {
  let component: ProjectPercentComponent;
  let fixture: ComponentFixture<ProjectPercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPercentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
