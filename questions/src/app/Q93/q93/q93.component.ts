import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-q93',
  templateUrl: './q93.component.html',
  styleUrls: ['./q93.component.css']
})
export class Q93Component implements OnInit {

  constructor() { }
  numbers = of(5.2,3.2,4.2,1.4,0.2);
  
  result:number[]=[];
 
  ngOnInit(): void {     

      this.numbers.pipe(
        map((value:number)=>Math.round(value)),
        filter((value:number)=>value<5)      
      ).subscribe((data:number)=>this.result.push(data));

      console.log(this.result);

      //filterNumbers.subscribe((data:number)=>console.log(data));

      

  }

}
