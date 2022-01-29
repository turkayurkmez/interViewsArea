import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q93Component } from './q93.component';

describe('Q93Component', () => {
  let component: Q93Component;
  let fixture: ComponentFixture<Q93Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q93Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
