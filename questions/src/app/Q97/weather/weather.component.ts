import { Component, OnInit } from '@angular/core';
import { Weather, WeatherType } from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather : Weather = new Weather('Paris',23, WeatherType.Rain)
  constructor() { }

  ngOnInit(): void {
  }

}
