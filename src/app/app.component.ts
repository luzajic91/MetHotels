import { Component } from '@angular/core';
import { Accomodation } from './accomodation/accomodation.model';
import { Preporuka } from './preporuka/preporuka.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  accomodations: Accomodation[];
  preporuke: Preporuka[];
  title = 'MetHotels';

  dispCont: boolean[] = [false, false, false];

  displayCont(val: number): boolean {
    console.log("primljeno");
    this.dispCont[val] = !this.dispCont[val];
    return false;
  }

  constructor() {
    this.accomodations = [
      new Accomodation(1, 100),
      new Accomodation(2, 200),
      new Accomodation(3, 300)
    ];
    this.preporuke = [
      new Preporuka('Bed&Breakfast', 'Dorucak uz nocenje'),
      new Preporuka('Tourist special', 'Ukljucena tura svih najbitnijih turistickih zamki')
    ];
  }

  addRoom(beds: HTMLInputElement, price: HTMLInputElement): boolean {
    console.log(`Adding room beds: ${beds.value} and link: ${price.value}`);
    this.accomodations.push(new Accomodation(parseInt(beds.value), parseInt(price.value)));
    return false;
  }

}
