import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Accomodation } from './accomodation/accomodation.model';
import { Preporuka } from './preporuka/preporuka.model';

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

  constructor(fb: FormBuilder) {

    this.accomodations = [
      new Accomodation(1, 100),
      new Accomodation(2, 200),
      new Accomodation(3, 300)
    ];
    this.preporuke = [
      new Preporuka('Bed & Breakfast', 'Dorucak uz nocenje'),
      new Preporuka('Tourist special', 'Ukljucena tura svih najbitnijih turistickih zamki')
    ];

    // this.myForm.valueChanges.subscribe(
    //   (form: any) => {
    //     //if (form.controls['priceInput'].value)
    //     console.log(form);
    //   }
    // )
  }

  onSubmit(value: any): boolean {

    if (this.myForm.valid) {
      this.accomodations.push(new Accomodation(value.bedsInput, value.priceInput, value.minibar));
      console.log("accomodations done, price is "+value.priceInput);
      return false;
    }
    console.log(this.myForm.controls['priceInput'].valid);
    console.log(this.myForm.controls['bedsInput'].valid);
    console.log(this.myForm.controls['minibar'].value);
    console.log(this.myForm);
    return false;
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      bedsInput: new FormControl('', [Validators.required, this.customValidator2]),
      priceInput: new FormControl('', [Validators.required, this.customValidator3]),
      minibar: new FormControl()
    });
    this.myForm.valueChanges.subscribe(
      (form: any) => {
        if (this.myForm.controls['priceInput'].value < 99999) {
          console.log("uneta vrednost je"+this.myForm.controls['priceInput'].value);
        }
      }
    )
  }

  customValidator2(control: FormControl) {
    if (control.value > 10 || control.value < 1) {
      return {"cant have more than 10 rooms": true};
    } else {
      return null;
    }
  }

  customValidator3(control: FormControl) {
    if (control.value < 100) {
      return {"price cant be lower than 100": true};
    } else {
      return null;
    }
  }
}
