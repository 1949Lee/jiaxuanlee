import { Component, OnInit, Inject, Input, enableProdMode } from '@angular/core';
import { LoggerService } from '../../_services/logger.service';
import { appConfig } from '../../app.config';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { findIndex, map } from 'lodash';

@Component({
  selector: 'app-mim-ng-component-carousel',
  templateUrl: './mim-ng-component-carousel.component.html',
  styleUrls: ['./mim-ng-component-carousel.component.scss']
})
export class MimNgComponentCarouselComponent implements OnInit {
  @Input('options') carouselOption: any;
  wrapperHeight: string;
  currentIndex: number;//当前图片下标
  lastIndex: number;//上一个图片下标
  prevIndex: number;//向左切换的图片下标
  nextIndex: number;//向右切换的图片下标


  constructor( @Inject(appConfig) private app, private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log(this.carouselOption)();
    this.currentIndex = this.carouselOption.slides.findIndex((slide) => {
      return slide.active;
    });
  }

  next() {
    this.changeSlide("+");
  }

  prev() {
    this.changeSlide("-");
  }

  changeSlide(directve: any) {
    switch (directve) {
      case "+":
        this.currentIndex = (this.currentIndex + 1) % this.carouselOption.slides.length;
        break;
      case "-":
        this.currentIndex = (this.currentIndex - 1) < 0 ? this.carouselOption.slides.length - 1 : this.currentIndex - 1;
        this.logger.log(this.currentIndex)();
        break;
      default:
        this.currentIndex = directve;
        break;
    }
    const temp: any = this.carouselOption.slides.map((slide, i) => {
      slide.active = i == this.currentIndex ? true : false;
      return slide;
    });
    this.carouselOption.slides = temp;
  }

}
