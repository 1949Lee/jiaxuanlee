import { Component, OnInit, Inject, Input,enableProdMode  } from '@angular/core';
import { LoggerService } from '../../_services/logger.service';
import { appConfig } from '../../app.config';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-mim-ng-component-carousel',
  templateUrl: './mim-ng-component-carousel.component.html',
  styleUrls: ['./mim-ng-component-carousel.component.scss']
})
export class MimNgComponentCarouselComponent implements OnInit, AfterViewInit {
  @Input('options') carouselOption: any;
  wrapperHeight: string;
  slides:any;

  constructor( @Inject(appConfig) private app, private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log(this.carouselOption)();
  }
  ngAfterViewInit() {

  }



}
