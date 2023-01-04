import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Accomodation } from './accomodation/accomodation.model';
import { Preporuka } from './preporuka/preporuka.model';
import { RoomService } from './services/room.service';
import { AccomodationService } from './services/accomodation.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  accomodations: Accomodation[];
  preporuke: Preporuka[];
  title = 'MetHotels';

  myForm: FormGroup;
  ru: AbstractControl;
  rutri: AbstractControl;


  dispCont: boolean[] = [false, false, false];

  displayCont(val: number): boolean {
    console.log("primljeno");
    this.dispCont[val] = !this.dispCont[val];
    return false;
  }

  constructor(private accomodationService: AccomodationService) {

    this.preporuke = [
      new Preporuka('Bed & Breakfast', 'Dorucak uz nocenje'),
      new Preporuka('Tourist special', 'Ukljucena tura svih najbitnijih turistickih zamki')
    ];

  }

  onSubmit(value: any) {

    if (this.myForm.valid) {
      var id = Math.floor(Math.random() * 100) + 1
      var ac = new Accomodation(id, value.bedsInput, value.nightsInput, value.minibar);
      this.accomodations.push(ac);
      this.accomodationService.addAccomodation(ac).subscribe((accomodation) => (this.accomodations.push(accomodation)));
      //console.log("accomodations booked, number of nights are "+ac.beds, ac.nights, ac.minibar, ac.id);
      //this.myForm.reset();
    }
    console.log(this.myForm.controls['nightsInput'].valid);
    console.log(this.myForm.controls['bedsInput'].valid);
    console.log(this.myForm.controls['minibar'].value);
    //console.log(this.myForm);
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      bedsInput: new FormControl('', [Validators.required, this.customValidator2]),
      nightsInput: new FormControl('', [Validators.required, this.customValidator3]),
      minibar: new FormControl()
    });

    this.myForm.valueChanges.subscribe(
      () => {
        if (this.myForm.controls['nightsInput'].value < 99999) {
          console.log("uneta vrednost je "+this.myForm.controls['nightsInput'].value);
        }
      }
    )

    this.accomodationService.getAccomodations().subscribe((accomodations) => (this.accomodations = accomodations));
  }

  deleteAccomodation(accomodation: Accomodation) {
    console.log(accomodation.id);
    this.accomodationService.deleteAccomodation(accomodation).subscribe(() => (this.accomodations = this.accomodations.filter(a => a.id !== accomodation.id)))
  }

  editAccomodation(accomodation: Accomodation) {
    this.accomodationService.updateAccomodation(accomodation).subscribe();
  }

  customValidator2(control: FormControl) {
    if (control.value > 10 || control.value < 1) {
      return {"cant have more than 10 rooms": true};
    } else {
      return null;
    }
  }

  customValidator3(control: FormControl) {
    if (control.value > 100) {
      return {"number of nights cant be higher than 100": true};
    } else {
      return null;
    }
  }
}
