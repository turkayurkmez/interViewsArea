import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHideComponent } from './show-hide.component';

describe('ShowHideComponent', () => {
  let component: ShowHideComponent;
  let fixture: ComponentFixture<ShowHideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isShowing', ()=>{
    expect(component.isShowing)
      .withContext('hide at first')
      .toBe(false);
    component.clicked();
    expect(component.isShowing).withContext('show after clicked')
                               .toBe(true)
    component.clicked();
    expect(component.isShowing)
      .withContext('hide after second click')
      .toBe(false);                           

  });

  it('#clicked() should set #message to "show"',()=>{
    expect(component.message())
       .withContext('hide')
       .toMatch("Hide");
    component.clicked();
    
    expect(component.message())
       .withContext('after')
       .toMatch("Show");
  })
});
