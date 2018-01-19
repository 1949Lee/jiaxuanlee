import { Injectable, Inject } from '@angular/core';
import { appConfig } from '../app.config';
import { LoggerService } from './logger.service';

@Injectable()
export class LeeService {

  constructor(
    @Inject(appConfig) private app,
    private logger: LoggerService
  ) {
    // this.logger.log('我的服务已启动')();  
  }

  ViewportSize() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
  }
}
