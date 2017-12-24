import { Component, OnInit, Inject } from '@angular/core';
import { LoggerService } from '../../_services/logger.service';
import { appConfig, _appConfig } from '../../app.config';

@Component({
  selector: 'app-mim-ng-component-carousel',
  templateUrl: './mim-ng-component-carousel.component.html',
  styleUrls: ['./mim-ng-component-carousel.component.scss']
})
export class MimNgComponentCarouselComponent implements OnInit {

  constructor(@Inject(appConfig) private app,private logger:LoggerService) { }

  ngOnInit() {
    this.logger.log(this.app)();
  }

}
