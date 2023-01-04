import { Component, Input, OnInit } from '@angular/core';
import { Accomodation } from '../accomodation/accomodation.model';
import { AccomodationService } from '../services/accomodation.service';

@Component({
  selector: 'app-accomodations',
  templateUrl: './accomodations.component.html',
  styleUrls: ['./accomodations.component.css']
})
export class AccomodationsComponent implements OnInit {

  @Input() accomodations: Accomodation[];

  constructor(private accomodationService: AccomodationService) { }

  ngOnInit(): void {
    this.accomodationService.getAccomodations().subscribe((accomodations) => (this.accomodations = accomodations));
  }

  deleteAccomodation(accomodation: Accomodation) {
    console.log(accomodation.id);
    this.accomodationService.deleteAccomodation(accomodation).subscribe(() => (this.accomodations = this.accomodations.filter(a => a.id !== accomodation.id)))
  }

  editAccomodation(accomodation: Accomodation) {
    this.accomodationService.updateAccomodation(accomodation).subscribe();
  }

}
