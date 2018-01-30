import { Injectable, Inject } from '@angular/core';
import { appConfig } from '../app.config';
import { LoggerService } from './logger.service';
import { viewClassName } from '@angular/compiler';
import { Subject } from 'rxjs';

@Injectable()
export class LeeService {
  viewport: ViewPort;
  contentScroll: ContentScroll;
  responsive: ResponsiveUI;


  constructor(
    @Inject(appConfig) private app,
    private logger: LoggerService
  ) {
    // this.logger.log('我的服务已启动')(); 
    this.viewport = new ViewPort(app, logger);
    this.contentScroll = new ContentScroll(app, logger);
    this.responsive = new ResponsiveUI(app, logger, this.viewport);
  }



}


@Injectable()
class ViewPort {


  viewport: Subject<any> = new Subject<any>();
  viewport$: any = this.viewport.asObservable();

  constructor(
    @Inject(appConfig) private app,
    private logger: LoggerService
  ) {

  }

  changeViewportSize() {
    this.viewport.next(this.ViewportSize());
  }

  ViewportSize(viewport?: any) {
    let temp;
    if (viewport) {
      temp = viewport;
    }
    else {
      temp = {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      };
    }
    return temp;
  }
}

@Injectable()
class ContentScroll {
  scroll = new Subject<any>();
  scroll$ = this.scroll.asObservable();

  constructor(
    @Inject(appConfig) private app,
    private logger: LoggerService
  ) {

  }

  change(scrollTop) {
    this.scroll.next(scrollTop);
  }
}

@Injectable()
class ResponsiveUI {

  constructor(
    @Inject(appConfig) private app,
    private logger: LoggerService,
    private media: ViewPort) {
    let xs = window.matchMedia(`(max-width: 575.99px) and (orientation: portrait), (max-width: 575.99px) and (orientation: landscape)`);
    let sm = window.matchMedia(`(min-width: 576px) and (max-width: 767.99px) and (orientation: portrait), (min-width: 576px) and (max-width: 767.99px) and (orientation: landscape)`);
    let md = window.matchMedia(`(min-width: 768px) and (max-width: 991.99px) and (orientation: portrait), (min-width: 768px) and (max-width: 991.99px) and (orientation: landscape)`);
    let lg = window.matchMedia(`(min-width: 992px) and (max-width: 1199.99px) and (orientation: portrait), (min-width: 992px) and (max-width: 1199.99px) and (orientation: landscape)`);
    let xl = window.matchMedia(`(min-width: 1200px) and (orientation: portrait), (min-width: 1200px) and (orientation: landscape)`);
    console.log(xs, sm, md, lg, xl);
  }

  xsChange() {

  }
}