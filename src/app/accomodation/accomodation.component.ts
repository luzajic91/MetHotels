import { Component, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() onDeleteAccomodation: EventEmitter<Accomodation> = new EventEmitter();
  @Output() onEditAccomodation: EventEmitter<Accomodation> = new EventEmitter();

  votes: number;
  title: string;
  link: string;
  getPrice: number;

  btnVal: string;

  constructor(private roomService: RoomService) {
    this.roomService = roomService;
    //this.accomodation = new Accomodation(1,1,1);
    //this.getPrice = this.roomService.getPrice(this.accomodation.nights, this.accomodation.price);
  }
  
  ngOnInit(): void {
    if (this.accomodation.minibar) {
      this.btnVal = "Remove minibar"; 
    } else {
      this.btnVal = "Add minibar";
    }
  }

  onDelete(accomodation: Accomodation) {
    this.onDeleteAccomodation.emit(accomodation);
  }

  onEdit(accomodation: Accomodation) {
    accomodation.minibar = !accomodation.minibar;
    console.log(accomodation.minibar);
    this.onEditAccomodation.emit(accomodation);
    this.changeButton();
  }

  changeButton() {
    if (this.accomodation.minibar) {
      this.btnVal = "Remove minibar";
    } else {
      this.btnVal = "Add minibar";
    }
  }
}
