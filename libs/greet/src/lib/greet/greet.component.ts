import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng1-ce-wrapper-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {
  @Input() message: String;
  constructor() {}

  ngOnInit() {}
}
