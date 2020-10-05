import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menuel',
  templateUrl: './menuel.component.html',
  styleUrls: ['./menuel.component.css']
})
export class MenuelComponent implements OnInit {
  @Input() name;
  @Input() img;

  constructor() { }

  ngOnInit() {
  }

}
