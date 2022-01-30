import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('when component member changed, input element value changed', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#search');
    expect(inputElement).toBeTruthy();
    expect(component.searchString).toEqual('');
    expect(inputElement.value).toEqual('');
    component.searchString='sample';   
    
    fixture.detectChanges();
    //tick();
    fixture.whenStable().then(r => {
      const updated: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#paragraph');
    
      expect(updated.innerText).toEqual('sample');
    });
  })

  it('when input element change component member has changed',fakeAsync(()=>{
     const testValue='native';
     let inputElement : HTMLInputElement = fixture.debugElement.query(By.css('#search')).nativeElement;
     inputElement.value = testValue;

     inputElement.dispatchEvent(new Event('input'));
     fixture.detectChanges();

     expect(fixture.debugElement.query(By.css('#search')).nativeElement.value).toEqual(testValue);
     expect(fixture.debugElement.query(By.css('#paragraph')).nativeElement.innerText).toEqual(testValue);
     
  }));
  

});
