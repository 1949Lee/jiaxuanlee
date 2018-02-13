import { Injectable, Inject } from '@angular/core';
import { appConfig } from '../app.config';
import { LoggerService } from './logger.service';
import { viewClassName } from '@angular/compiler';
import { Subject,Observable } from 'rxjs';
// import { next } from 'rxjs/next/operator/next';

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

interface Media {
  type:string;
  mediaQuery:string;
  matches:boolean;
}

@Injectable()
class ResponsiveUI {

  private xs:any;
  private sm:any;
  private md:any;
  private lg:any;
  private xl:any;
  public xs$:any;
  public sm$:any;
  public md$:any;
  public lg$:any;
  public xl$:any;
  public curr:Media;
  public all:{xs:Media;sm:Media;md:Media;lg:Media;xl:Media;};

  constructor(
    @Inject(appConfig) private app,
    private logger: LoggerService,
    private media: ViewPort) {
      this.initMedia();
  }

  initMedia(){
    this.xs = window.matchMedia(this.app.breakpoints.xs);
    this.sm = window.matchMedia(this.app.breakpoints.sm);
    this.md = window.matchMedia(this.app.breakpoints.md);
    this.lg = window.matchMedia(this.app.breakpoints.lg);
    this.xl = window.matchMedia(this.app.breakpoints.xl);
    this.resetCurrent();
    this.resetAll();
    this.xs.addListener((mql)=>{
      // this.logger.log(0)();
    });
    this.sm.addListener((mql)=>{
    });
    this.md.addListener((mql)=>{
    });
    this.lg.addListener((mql)=>{
    });
    this.xl.addListener((mql)=>{
    });
    this.xs$ = Observable.fromEvent(this.xs,'change');
    this.xs$.subscribe((mql)=>{
      this.resetCurrent();
      this.xsChange(mql);
    })
    this.sm$ = Observable.fromEvent(this.sm,'change');
    this.sm$.subscribe((mql)=>{
      this.resetCurrent();
      this.smChange(mql);
    })
    this.md$ = Observable.fromEvent(this.md,'change');
    this.md$.subscribe((mql)=>{
      this.resetCurrent();
      this.mdChange(mql);
    })
    this.lg$ = Observable.fromEvent(this.lg,'change');
    this.lg$.subscribe((mql)=>{
      this.resetCurrent();
      this.lgChange(mql);
    })
    this.xl$ = Observable.fromEvent(this.xl,'change');
    this.xl$.subscribe((mql)=>{
      this.resetCurrent();
      this.xlChange(mql);
    })
    
    return this.curr;
  }

  resetCurrent(){
    this.curr = {
      type:'',
      mediaQuery:'',
      matches:false
    };
    if(this.xs.matches){
      this.curr.type = 'xs';
      this.curr.mediaQuery = this.app.breakpoints.xs;
      this.curr.matches = true;
    }
    if(this.sm.matches){
      this.curr.type = 'sm';
      this.curr.mediaQuery = this.app.breakpoints.sm;
      this.curr.matches = true;
    }
    if(this.md.matches){
      this.curr.type = 'md';
      this.curr.mediaQuery = this.app.breakpoints.md;
      this.curr.matches = true;
    }
    if(this.lg.matches){
      this.curr.type = 'lg';
      this.curr.mediaQuery = this.app.breakpoints.lg;
      this.curr.matches = true;
    }
    if(this.xl.matches){
      this.curr.type = 'xl';
      this.curr.mediaQuery = this.app.breakpoints.xl;
      this.curr.matches = true;
    }
    return this.curr;
  }

  resetAll(){
    this.all = {
      xs:{
        type:'xs',
        mediaQuery:this.app.breakpoints.xs,
        matches:this.xs.matches
      },
      sm:{
        type:'sm',
        mediaQuery:this.app.breakpoints.sm,
        matches:this.sm.matches
      },
      md:{
        type:'md',
        mediaQuery:this.app.breakpoints.md,
        matches:this.md.matches
      },
      lg:{
        type:'lg',
        mediaQuery:this.app.breakpoints.lg,
        matches:this.lg.matches
      },
      xl:{
        type:'xl',
        mediaQuery:this.app.breakpoints.xl,
        matches:this.xl.matches
      }
    }
    return this.all;
  }
  
  CurrentMedia(){
    return this.resetCurrent();
  }

  AllMedia(){
    this.resetAll();
  }

  xsChange(mql:any){
    this.all.xs.matches = mql.matches;
  }

  smChange(mql:any){
    this.all.sm.matches = mql.matches;
  }

  mdChange(mql:any){
    this.all.md.matches = mql.matches;
  }

  lgChange(mql:any){
    this.all.lg.matches = mql.matches;
  }

  xlChange(mql:any){
    this.all.xl.matches = mql.matches;
  }

}