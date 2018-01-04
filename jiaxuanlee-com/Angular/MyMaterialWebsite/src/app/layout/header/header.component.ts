import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggle: EventEmitter<boolean> = new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

  doSideNavToggle() {
    this.sideNavToggle.emit(true);
  }

}
