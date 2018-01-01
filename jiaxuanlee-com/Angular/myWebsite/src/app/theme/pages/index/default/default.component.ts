import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { appConfig } from '../../../../app.config';

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(@Inject(appConfig) private app) { }

  ngOnInit() {
  }

}
