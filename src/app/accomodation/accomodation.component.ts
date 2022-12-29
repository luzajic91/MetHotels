import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
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
  getPrice: number;

  constructor(private roomService: RoomService) {
    this.roomService = roomService;
    this.accomodation = new Accomodation(1,1);
    this.getPrice = this.roomService.getPrice(this.accomodation.nights, this.accomodation.price);
  }
  
  ngOnInit(): void {

  }
}
