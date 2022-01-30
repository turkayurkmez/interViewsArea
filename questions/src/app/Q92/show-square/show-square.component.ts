import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-square',
  templateUrl: './show-square.component.html',
  styleUrls: ['./show-square.component.css']
})
export class ShowSquareComponent implements OnInit {

  constructor() { }
  numbers: number[] = [1,2,3,4,5,6,7,8,9];

  ngOnInit(): void {
      let result = this.numbers.map((value:number)=>value * value);
      console.log(result);

  }

}
