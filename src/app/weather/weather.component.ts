import {Component} from '@angular/core';
import {Weather} from "../interfaces/weather";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  weather: Weather | undefined;

  constructor(private weatherService: WeatherService) {
  }

  search(city: string) {
    this.weatherService.getWeather(city)
      .subscribe(res => {
        this.weather = res;
      });
  }

}
