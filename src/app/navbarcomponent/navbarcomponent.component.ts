import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbarcomponent',
  templateUrl: './navbarcomponent.component.html',
  styleUrls: ['./navbarcomponent.component.css']
})
export class NavbarcomponentComponent implements OnInit {

  showAccomodations: boolean = false;
  showSpecial: boolean = false;
  showAbout: boolean = false;

  @Output() display = new EventEmitter<number>();

  displayCont(val: number) {
    console.log("poslato");
    this.display.emit(val);
  }

  constructor() { }

  accomodationList(): void {
    this.showAccomodations = !this.showAccomodations;
    this.showSpecial = false;
    this.showAbout = false;
    console.log(this.showAccomodations);
  }
  specialOffer(): void {
    this.showAccomodations = false;
    this.showSpecial = true;
    this.showAbout = false;
  }
  about(): void {
    this.showAccomodations = false;
    this.showSpecial = false;
    this.showAbout = true;
  }

  ngOnInit(): void {
  }

}
