import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Accomodation } from './accomodation.model';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';

  @Input() accomodation: Accomodation;

  votes: number;
  title: string;
  link: string;

  constructor() {
    this.accomodation = new Accomodation(
      1, 100
    );
  }

  ngOnInit(): void {
  }
}
