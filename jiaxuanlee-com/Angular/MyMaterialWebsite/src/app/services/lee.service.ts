import { Injectable, Inject } from '@angular/core';
import { appConfig } from '../app.config';
import { LoggerService } from './logger.service';
import { viewClassName } from '@angular/compiler';
import { Subject } from 'rxjs';

@Injectable()
export class LeeService {
  viewport: ViewPort;


  constructor(
    @Inject(appConfig) private app,
    private logger: LoggerService
  ) {
    // this.logger.log('我的服务已启动')(); 
    this.viewport = new ViewPort(app,logger);
  }


  
}


class ViewPort{
  

  viewport: Subject<any> = new Subject<any>();
  viewport$: any =  this.viewport.asObservable();

  constructor(
    @Inject(appConfig) private app,
    private logger: LoggerService
  ){
    
  }

  changeViewportSize(){
    this.viewport.next(this.ViewportSize());
  }
  
  ViewportSize(viewport?:any) {
    let temp;
    if(viewport){
      temp = viewport;
    }
    else{
      temp = {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      };
    }
    return temp;
  }
}
