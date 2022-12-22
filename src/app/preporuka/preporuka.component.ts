import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Preporuka } from './preporuka.model';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.css']
})
export class PreporukaComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() preporuka: Preporuka;

  constructor() { 
    this.preporuka = new Preporuka('', '');
  }

  ngOnInit(): void {
  }

}
