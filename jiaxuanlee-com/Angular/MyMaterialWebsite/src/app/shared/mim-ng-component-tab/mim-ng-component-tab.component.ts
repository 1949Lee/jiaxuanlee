import { Component, OnInit, Inject } from '@angular/core';
import { appConfig } from '../../app.config';
import { LoggerService } from '../../services/logger.service';
import { LeeService } from '../../services/lee.service';

@Component({
  selector: 'app-mim-ng-component-tab',
  templateUrl: './mim-ng-component-tab.component.html',
  styleUrls: ['./mim-ng-component-tab.component.scss']
})
export class MimNgComponentTabComponent implements OnInit {

  viewport: any;

  constructor(
    @Inject(appConfig) public app,
    private logger: LoggerService,
    private lee: LeeService
  ) {
    this.logger.log(this.app.indexTab)();
    this.viewport = this.lee.viewport.ViewportSize();
    this.lee.viewport.viewport$.subscribe((vp)=>{
      this.viewport = vp;
    });
  }

  ngOnInit() {
  }

}
