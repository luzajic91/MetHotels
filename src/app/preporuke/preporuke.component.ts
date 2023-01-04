import { Component, OnInit } from '@angular/core';
import { Preporuka } from '../preporuka/preporuka.model';

@Component({
  selector: 'app-preporuke',
  templateUrl: './preporuke.component.html',
  styleUrls: ['./preporuke.component.css']
})
export class PreporukeComponent implements OnInit {

  preporuke: Preporuka[];

  constructor() {
    this.preporuke = [
      new Preporuka('Bed & Breakfast', 'Dorucak uz nocenje'),
      new Preporuka('Tourist special', 'Ukljucena tura svih najbitnijih turistickih zamki')
    ];
  }

  ngOnInit(): void {
  }

}
