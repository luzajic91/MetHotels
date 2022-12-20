import { Component } from '@angular/core';
import { Accomodation } from './accomodation/accomodation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  accomodations: Accomodation[];
  title = 'MetHotels';

  constructor() {
    this.accomodations = [
      new Accomodation(1, 100),
      new Accomodation(2, 200),
      new Accomodation(3, 300)
    ];
  }

  addRoom(beds: HTMLInputElement, price: HTMLInputElement): boolean {
    console.log(`Adding room beds: ${beds.value} and link: ${price.value}`);
    this.accomodations.push(new Accomodation(parseInt(beds.value), parseInt(price.value)));
    return false;
  }
}
