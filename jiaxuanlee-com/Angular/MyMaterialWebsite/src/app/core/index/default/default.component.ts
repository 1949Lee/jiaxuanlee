import { Component, OnInit, Inject } from '@angular/core';
import { appConfig } from '../../../app.config';
import { LeeService } from '../../../services/lee.service';
import * as _ from "lodash";
import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  viewport: any;

  constructor(
    @Inject(appConfig) public app,
    private lee: LeeService,
    private logger:LoggerService
  ) {
    this.viewport = this.lee.viewport.ViewportSize();
    this.lee.viewport.viewport$.subscribe((vp) =>{
      this.logger.log(vp)();
      this.viewport = vp;
    });
  }

  ngOnInit() {

  }

}
