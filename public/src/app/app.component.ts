import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokeinfo :any;

constructor(private _httpService: HttpService ){
    
  _httpService.getPokemonbulb().subscribe(data =>
    {
      this.pokeinfo = data;
      console.log(data);
      console.log(data['name']);
    });
}



}

