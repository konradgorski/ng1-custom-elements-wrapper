import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng1-ce-wrapper-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {
  @Input() name: String;
  @Output() nameChange = new EventEmitter();

  constructor() {}

  updateName() {
    let name = '';

    if (this.name === 'Erin Coughlan') {
      name = 'Siddharth Pal';
    } else {
      name = 'Erin Coughlan';
    }
    this.nameChange.emit(name);
  }
  ngOnInit() {}
}
