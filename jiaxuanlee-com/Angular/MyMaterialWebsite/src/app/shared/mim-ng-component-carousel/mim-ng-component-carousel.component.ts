import { Component, OnInit, Inject, Input, enableProdMode } from '@angular/core';
import { appConfig } from '../../app.config';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { findIndex, map } from 'lodash';
import { LoggerService } from '../../services/logger.service';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { LeeService } from '../../services/lee.service';

@Component({
  selector: 'app-mim-ng-component-carousel',
  templateUrl: './mim-ng-component-carousel.component.html',
  styleUrls: ['./mim-ng-component-carousel.component.scss']
})
export class MimNgComponentCarouselComponent implements OnInit {

  animationTimer: any;//当前轮播图的定时器
  viewportSize: { height: number; width: number; };//当前可视窗口的大小，根据视口大小实时调整

  @Input('options') carouselOption: any;
  wrapperHeight: string;
  currentIndex: number;//当前图片下标
  // lastIndex: number;//上一个图片下标
  prevIndex: number;//向左切换的图片下标,上一个图片下标
  nextIndex: number;//向右切换的图片下标
  navButtonAnimationPlayed: string = 'paused';


  constructor(
    @Inject(appConfig) private app,
    private logger: LoggerService,
    private media: ObservableMedia,
    private lee: LeeService
  ) {

  }

  ngOnInit() {
    this.logger.log(this.carouselOption)();
    this.currentIndex = this.carouselOption.slides.findIndex((slide) => {
      return slide.active;
    });
    this.changeIndex(this.currentIndex);
    this.setBackgroundSize(this.lee.viewport.ViewportSize());
    this.lee.viewport.viewport$.subscribe((view) => {
      this.logger.log(view)();
      this.setBackgroundSize(view);
    })
    this.startSlide();
  }

  ngOnDestroy() {
    this.pauseSlide();
  }

  startSlide(){
    this.navButtonAnimationPlayed = "running";
    this.animationTimer = setInterval(() => { 
      this.changeSlide("+");
    }, 6000);
  }

  pauseSlide(){
    clearInterval(this.animationTimer);
    this.navButtonAnimationPlayed = "paused";
  }

  next() {
    this.changeSlide("+");
  }

  prev() {
    this.changeSlide("-");
  }

  changeIndex(directve: any) {
    switch (directve) {
      case "+":
        this.prevIndex = this.currentIndex;
        this.currentIndex = (this.currentIndex + 1) % this.carouselOption.slides.length;
        this.nextIndex = (this.currentIndex + 1) % this.carouselOption.slides.length;
        break;
      case "-":
        this.nextIndex = this.currentIndex;
        this.currentIndex = (this.currentIndex - 1) < 0 ? this.carouselOption.slides.length - 1 : this.currentIndex - 1;
        this.prevIndex = (this.currentIndex - 1) < 0 ? this.carouselOption.slides.length - 1 : this.currentIndex - 1;
        break;
      default:
        this.currentIndex = directve;
        this.nextIndex = (this.currentIndex + 1) % this.carouselOption.slides.length;
        this.prevIndex = (this.currentIndex - 1) < 0 ? this.carouselOption.slides.length - 1 : this.currentIndex - 1;
        break;
    }
  }

  changeSlide(directve: any) {
    this.changeIndex(directve);

    const temp: any = this.carouselOption.slides.map((slide, i) => {
      slide.active = i == this.currentIndex ? true : false;
      return slide;
    });
    this.carouselOption.slides = temp;
  }

  setBackgroundSize(viewport: { height: number, width: number }): any {
    this.viewportSize = viewport;
  }

  pausedAnimation(){
    this.pauseSlide();
  }

  resumeAnimation(){
    this.startSlide();
  }

}
