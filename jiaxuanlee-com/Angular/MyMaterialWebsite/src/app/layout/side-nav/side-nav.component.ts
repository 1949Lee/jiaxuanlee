import { Component, OnInit, Inject } from '@angular/core';
import { appConfig } from '../../app.config';

@Component({
  selector: '.lee-sidenav-content',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(
   @Inject(appConfig) public app
  ) { }

  ngOnInit() {
  }

}
