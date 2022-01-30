import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSquareComponent } from './show-square.component';

describe('ShowSquareComponent', () => {
  let component: ShowSquareComponent;
  let fixture: ComponentFixture<ShowSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
